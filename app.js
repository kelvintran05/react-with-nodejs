const express = require('express');
const app = express();

app.get('/', (req,res) => {
  res.send({
    bye: "SAM"
  });
});

module.exports = app;
