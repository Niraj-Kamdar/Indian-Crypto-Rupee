const router = require("express").Router();
const User = require("../models/user");
const config = require("config");
const checksum_lib = require(`../controller/paytm/checksum`);

const SECRET_KEY = config.get(`COOKIES.SECRET_KEY`);
const URL = config.get(`SERVER.URL`);
const MID = config.get("PAYMENT.MID");
const MKEY = config.get("PAYMENT.MKEY");
const { web3Controls } = require("../ethereumControls/web3");
const web3 = web3Controls.web3;
router.post("/", (req, res) => {
  const { username, amount } = req.body;
  const { UserToken } = req.cookies;
  User.findById(UserToken, (err, docs) => {
    const sender = docs.publicKey;
    User.findOne({ username }, (err, docs2) => {
      if (err) {
        return res.redirect('/?error="userdoesntexits"');
      }
      const receiver = docs2.publicKey;
      web3Controls.transfer(sender, receiver, parseInt(amount)).then(() => {
        web3Controls.balanceOf(docs2.publicKey).then(val => {
          User.findByIdAndUpdate(
            { _id: docs2._id },
            { balance: val },
            { new: true },
            (err, docs3) => {
              web3Controls.balanceOf(docs.publicKey).then(val2 => {
                User.findByIdAndUpdate(
                  { _id: docs._id },
                  { balance: val2 },
                  { new: true },
                  (err, docs4) => {
                    res.redirect("/");
                  }
                );
              });
            }
          );
        });
      });
    });
  });
});

module.exports = router;
