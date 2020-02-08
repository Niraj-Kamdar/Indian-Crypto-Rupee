const router = require("express").Router();
const User = require("../models/user");
const config = require("config");
const checksum_lib = require(`../controller/paytm/checksum`);

const SECRET_KEY = config.get(`COOKIES.SECRET_KEY`);
const URL = config.get(`SERVER.URL`);
const MID = config.get("PAYMENT.MID");
const MKEY = config.get("PAYMENT.MKEY");
const ***REMOVED*** web3Controls ***REMOVED*** = require("../ethereumControls/web3");
const web3 = web3Controls.web3;
router.post("/", (req, res) => ***REMOVED***
  const ***REMOVED*** username, amount ***REMOVED*** = req.body;
  const ***REMOVED*** UserToken ***REMOVED*** = req.cookies;
  User.findById(UserToken, (err, docs) => ***REMOVED***
    const sender = docs.publicKey;
    User.findOne(***REMOVED*** username ***REMOVED***, (err, docs2) => ***REMOVED***
      if (err) ***REMOVED***
        return res.redirect('/?error="userdoesntexits"');
    ***REMOVED***
      const receiver = docs2.publicKey;
      web3Controls.transfer(sender, receiver, parseInt(amount)).then(() => ***REMOVED***
        web3Controls.balanceOf(docs2.publicKey).then(val => ***REMOVED***
          User.findByIdAndUpdate(
            ***REMOVED*** _id: docs2._id ***REMOVED***,
            ***REMOVED*** balance: val ***REMOVED***,
            ***REMOVED*** new: true ***REMOVED***,
            (err, docs3) => ***REMOVED***
              web3Controls.balanceOf(docs.publicKey).then(val2 => ***REMOVED***
                User.findByIdAndUpdate(
                  ***REMOVED*** _id: docs._id ***REMOVED***,
                  ***REMOVED*** balance: val2 ***REMOVED***,
                  ***REMOVED*** new: true ***REMOVED***,
                  (err, docs4) => ***REMOVED***
                    res.redirect("/");
                ***REMOVED***
                );
            ***REMOVED***);
          ***REMOVED***
          );
      ***REMOVED***);
    ***REMOVED***);
  ***REMOVED***);
***REMOVED***);
***REMOVED***);

module.exports = router;
