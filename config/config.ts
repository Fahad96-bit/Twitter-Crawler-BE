require("dotenv").config(); //instatiate environment variables

module.exports = {
  port: process.env.PORT,
  authorization: process.env.AUTHORIZATION,
  apiKey: process.env.APIKEY,
  apiSecret: process.env.APISECRET,
  accessToken: process.env.ACCESSTOKEN,
  accessTokenSecret: process.env.ACCESSTOKENSECRET,
  accept: process.env.ACCEPT,
};
