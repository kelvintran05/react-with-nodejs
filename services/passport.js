const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});
//Client ID: 347723253198-uvl8dkvg0vrj0iv60a8tn66e06lucrh5.apps.googleusercontent.com
//Client Serect: U7ssSq92WfExh6YhxxAUcHf_
passport.use(
    new GoogleStrategy({
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
    //   console.log('access Token', accessToken);
    //   console.log('refresh Token', refreshToken);
    //   console.log('profile: ', profile);
        User.findOne({ googleId: profile.id }).then((existingUser) => {
                if (existingUser) {
                    //we allready have a record with the given profile ID
                    done(null, existingUser);
                } else {
                    //we don't have a user record with this ID, make a new record!
                    new User({ googleId: profile.id })
                        .save()
                        .then(user => done(null, user));
                }
            })
    })
  );