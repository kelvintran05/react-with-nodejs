import express from 'express';
// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

//Client ID: 270741756236-1gm7o6tg705ispfdvjm5avvqsld24c0h.apps.googleusercontent.com
//Client Serect: hsCA_qsjf_ehCTUCuNzCOGXW
// passport.use(new GoogleStrategy());

app.get('/', (req,res) => {
  res.send({
    bye: "SAM"
  });
});

const PORT = procees.env.PORT || 5000;
app.listen(PORT);
