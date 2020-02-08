const router = require("express").Router();
const User = require("../models/user");
const config = require("config");
const checksum_lib = require(`../controller/paytm/checksum`);

const SECRET_KEY = config.get(`COOKIES.SECRET_KEY`);
const URL = config.get(`SERVER.URL`);
const MID = config.get("PAYMENT.MID");
const MKEY = config.get("PAYMENT.MKEY");

router.post("/", (req, res) => ***REMOVED***
  const ***REMOVED*** UserToken ***REMOVED*** = req.cookies;
  User.findById(UserToken, (err, docs) => ***REMOVED***
    if (err) ***REMOVED***
      return res.redirect("/dashboard");
  ***REMOVED***
    const ***REMOVED*** addmoney ***REMOVED*** = req.body;
    if (addmoney <= 0) ***REMOVED***
      return res.redirect("/dashboard");
  ***REMOVED***
    const ***REMOVED*** mobile, email ***REMOVED*** = docs;
    const myRandom = Math.random() * 10e16;
    const ORDER_ID = `ICR_$***REMOVED***myRandom***REMOVED***`;
    const CUST_ID = `ICR_$***REMOVED***myRandom***REMOVED***`;
    const MOBILE_NO = `$***REMOVED***mobile***REMOVED***`;
    const EMAIL = `$***REMOVED***email***REMOVED***`;
    let TXN_AMOUNT = `$***REMOVED***addmoney***REMOVED***`;
    const CALLBACK_URL = `$***REMOVED***URL***REMOVED***/addmoney/success`;

    // Set paytmParams
    var paytmParams = ***REMOVED***
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
  ***REMOVED***;

    // Generate CHECKSUMHASH
    checksum_lib.genchecksum(paytmParams, MKEY, (err, checksum) => ***REMOVED***
      var url = "https://securegw.paytm.in/order/process";
      res.writeHead(200, ***REMOVED*** "Content-Type": "text/html" ***REMOVED***);
      res.write("<html>");
      res.write("<head>");
      res.write("<title>Merchant Checkout Page</title>");
      res.write("</head>");
      res.write("<body>");
      res.write("<center><h1>Please do not refresh this page...</h1></center>");
      res.write('<form method="post" action="' + url + '" name="paytm_form">');
      for (var x in paytmParams) ***REMOVED***
        res.write(
          '<input type="hidden" name="' +
            x +
            '" value="' +
            paytmParams[x] +
            '">'
        );
    ***REMOVED***
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
  ***REMOVED***);
***REMOVED***);
***REMOVED***);

router.post("/success", (req, res) => ***REMOVED***
  let paytmChecksum = "";
  let paytmParams = ***REMOVED******REMOVED***;
  const ***REMOVED***
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
***REMOVED*** = req.body;
  received_data = ***REMOVED***
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
***REMOVED***;
  for (var key in received_data) ***REMOVED***
    if (key == "CHECKSUMHASH") ***REMOVED***
      paytmChecksum = received_data[key];
  ***REMOVED*** else ***REMOVED***
      paytmParams[key] = received_data[key];
  ***REMOVED***
***REMOVED***
  var isValidChecksum = checksum_lib.verifychecksum(
    paytmParams,
    MKEY,
    paytmChecksum
  );
  if (isValidChecksum || STATUS == "TXN_SUCCESS") ***REMOVED***
    return res.render("success");
***REMOVED*** else ***REMOVED***
    return res.redirect("/dashboard");
***REMOVED***
***REMOVED***);

module.exports = router;
