var path = require('path');
var express = require('express');
var publicDir = path.join(__dirname, '../public/');
var app = express();


app.get('*', function(req, res) {
  res.sendFile(publicDir + 'no_react.html');
});

app.listen('8080', function(err){
  if(err) {
    console.log(err);
    return;
  }
  console.log('Production server listening at http://localhost:8080');
});
