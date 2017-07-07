/* eslint-disable no-var, prefer-arrow-callback, prefer-template */

var express = require('express');
var path = require('path');

var app = express();
var publicDir = path.join(__dirname, '/client/');

app.use('/', express.static(publicDir));
app.listen(8080);
