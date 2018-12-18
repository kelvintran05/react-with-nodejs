'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

var app = (0, _express2.default)();

//Client ID: 270741756236-1gm7o6tg705ispfdvjm5avvqsld24c0h.apps.googleusercontent.com
//Client Serect: hsCA_qsjf_ehCTUCuNzCOGXW
// passport.use(new GoogleStrategy());

app.get('/', function (req, res) {
  res.send({
    bye: "SAM"
  });
});

app.listen(5000);