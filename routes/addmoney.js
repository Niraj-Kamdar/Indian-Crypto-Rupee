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
  const { UserToken } = req.cookies;
  User.findById(UserToken, (err, docs) => {
    if (err) {
      return res.redirect("/dashboard");
    }
    const { addmoney } = req.body;
    if (addmoney <= 0) {
      return res.redirect("/dashboard");
    }
    const { mobile, email } = docs;
    const myRandom = Math.random() * 10e16;
    const ORDER_ID = `ICR_${myRandom}`;
    const CUST_ID = `ICR_${myRandom}`;
    const MOBILE_NO = `${mobile}`;
    const EMAIL = `${email}`;
    let TXN_AMOUNT = `${addmoney}`;
    const CALLBACK_URL = `${URL}/addmoney/success`;

    // Set paytmParams
    var paytmParams = {
      MID, // Merchannt ID - String (20)
      CHANNEL_ID: "WEB", // String (3) Theme based on the channel
      WEBSITE: "DEFAULT", // String (30)
      INDUSTRY_TYPE_ID: "Retail", // String (20)
      ORDER_ID, // Unique OrderID - String (50)
      CUST_ID, // Unique CustomerID - String (64)
      TXN_AMOUNT, // String (10)
      // CHECKSUMHASH: "", // String (108) This will be generated in the following code.
      MOBILE_NO, // String (15)
      EMAIL, // String (50)
      CALLBACK_URL
    };

    // Generate CHECKSUMHASH
    checksum_lib.genchecksum(paytmParams, MKEY, (err, checksum) => {
      var url = "https://securegw.paytm.in/order/process";
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<html>");
      res.write("<head>");
      res.write("<title>Merchant Checkout Page</title>");
      res.write("</head>");
      res.write("<body>");
      res.write("<center><h1>Please do not refresh this page...</h1></center>");
      res.write('<form method="post" action="' + url + '" name="paytm_form">');
      for (var x in paytmParams) {
        res.write(
          '<input type="hidden" name="' +
            x +
            '" value="' +
            paytmParams[x] +
            '">'
        );
      }
      res.write(
        '<input type="hidden" name="CHECKSUMHASH" value="' + checksum + '">'
      );
      res.write("</form>");
      res.write('<script type="text/javascript">');
      res.write("document.paytm_form.submit();");
      res.write("</script>");
      res.write("</body>");
      res.write("</html>");
      res.end();
    });
  });
});

router.post("/success", (req, res) => {
  res.set(`Cache-Control`, `no-cache, no-store, must-revalidate`);
  let paytmChecksum = "";
  let paytmParams = {};
  const {
    CURRENCY,
    GATEWAYNAME,
    RESPMSG,
    BANKNAME,
    PAYMENTMODE,
    MID,
    RESPCODE,
    TXNID,
    TXNAMOUNT,
    ORDERID,
    STATUS,
    BANKTXNID,
    EMAIL,
    MOBILE_NO,
    TXNDATE,
    CHECKSUMHASH
  } = req.body;
  received_data = {
    CURRENCY,
    GATEWAYNAME,
    RESPMSG,
    BANKNAME,
    PAYMENTMODE,
    MID,
    RESPCODE,
    TXNID,
    TXNAMOUNT,
    ORDERID,
    STATUS,
    BANKTXNID,
    EMAIL,
    MOBILE_NO,
    TXNDATE,
    CHECKSUMHASH
  };
  for (var key in received_data) {
    if (key == "CHECKSUMHASH") {
      paytmChecksum = received_data[key];
    } else {
      paytmParams[key] = received_data[key];
    }
  }
  var isValidChecksum = checksum_lib.verifychecksum(
    paytmParams,
    MKEY,
    paytmChecksum
  );
  if (isValidChecksum || STATUS == "TXN_SUCCESS") {
    const { UserToken } = req.cookies;
    User.findById(UserToken, (err, docs) => {
      if (err) {
        return res.redirect("/");
      }
      // Update the balance of etherum wallet
      const { publicKey } = docs;
      web3Controls
        .mint(web3Controls.acc, publicKey, parseInt(TXNAMOUNT))
        .then(() => {
          let balance = 0;
          web3Controls.balanceOf(publicKey).then(val => {
            balance = val;
            User.findByIdAndUpdate(
              UserToken,
              { balance },
              { new: true },
              (err, docs2) => {
                return res.redirect("/");
              }
            );
          });
        });
    });
  } else {
    return res.redirect("/dashboard");
  }
});

module.exports = router;
