const router = require("express").Router();
const config = require("config");
const User = require("../models/user");
const checksum_lib = require(`../controller/paytm/checksum`);

// Required 3rd Party Modules
const nodemailer = require(`nodemailer`);
const { google } = require(`googleapis`);
const Oauth2 = google.auth.OAuth2;

// Configuration Setup
const EMAIL = config.get(`MAIL.EMAIL`);
const CLIENT_ID = config.get(`MAIL.CLIENT_ID`);
const CLIENT_SECRET = config.get(`MAIL.CLIENT_SECRET`);
const REDIRECT_URL = config.get(`MAIL.REDIRECT_URL`);
const REFRESH_TOKEN = config.get(`MAIL.REFRESH_TOKEN`);
const SECRET_KEY = config.get(`COOKIES.SECRET_KEY`);
const MKEY = config.get(`PAYMENT.MKEY`);

// OAuth2 CLient Setup
const oauth2Client = new Oauth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
oauth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN
});

router.post("/", (req, res) => {
  const { UserToken } = req.cookies;
  if (!UserToken) {
    return res.redirect("/");
  }
  User.findById(UserToken, (err, docs) => {
    const { getmoney } = req.body;
    const accessToken = oauth2Client.getAccessToken();
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken
      }
    });
    transporter.sendMail(
      {
        from: `Team ICR <${EMAIL}>`,
        to: `${docs.email}`,
        subject: "Successful Payment",
        html: `
              <div style="padding: 5%; box-shadow: 0px 0px 2px 5px #aaa">
                  <div style="background-color: #DFE0D4; padding: 20px; display: flex; justify-content: center; align-items: center;">
                      <img src="cid:synapse" width="80px" style="margin: auto 0px; min-width: 80px !important;"/>    
                      <h1 style="padding-left: 20px">Successful<br>Payment</h1>
                  </div>
                  <div style="background-color: #EFEFED; padding: 5%">
                      <p style="font-size: 14px">
                          Dear ${docs.name}, <br>
                          <br>
                          We’ll soon send your money to your account.
                          <br>
                          <b>Account Username :</b> ${docs.username}
                          <br>
                          <b>Amount :</b> ₹ ${getmoney}/-
                          <br>
                          <p>If you have not done this transection then mail us on the same to stop it.</p>
                          <br>
                          <br>
                          <p style="color:grey">Team ICR</p>
                      </p>
                  </div>
                  <div style="background-color: #DFE0D4; padding: 20px; display: flex; justify-content: center; align-items: center;">
                      <p style="font-size: 14px; display: block;">
                          Follow Us for Latest Update:
                      </p>
                      <div style="background-color: #ffffff; border: 2px solid red; border-radius: 50%; height: 32px; width:32px; margin-left: 10px; margin-top: 4px">
                          <img src="cid:fb" height="20px" width="20px" style="margin: 6px" >
                      </div>
                      <div style="background-color: #ffffff; border: 2px solid red; border-radius: 50%; height: 32px; width:32px; margin-left: 10px; margin-top: 4px">
                          <img src="cid:insta" height="20px" width="20px" style="margin: 6px" >
                      </div>
                  </div>
              </div>
              `,
        attachments: [
          {
            filename: "ICR.png",
            path: "./public/images/ICR.png",
            cid: "synapse"
          },
          {
            filename: "fb.png",
            path: "./public/images/fb.png",
            cid: "fb"
          },
          {
            filename: "insta.png",
            path: "./public/images/insta.png",
            cid: "insta"
          }
        ]
      },
      (err, info) => {
        if (err) {
          return res.send(`ERROR ${err}`);
        }
        return res.send(`success`);
      }
    );
  });
});

module.exports = router;
