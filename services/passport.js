const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const KEYS = require('../config/keys');

//Client ID: 270741756236-1gm7o6tg705ispfdvjm5avvqsld24c0h.apps.googleusercontent.com
//Client Serect: hsCA_qsjf_ehCTUCuNzCOGXW
passport.use(
    new GoogleStrategy({
      clientID: KEYS.googleClientID,
      clientSecret: KEYS.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('access Token', accessToken);
      console.log('refresh Token', refreshToken);
      console.log('profile: ', profile);
    })
  );