/* eslint-disable no-var, prefer-arrow-callback, prefer-template */

var express = require('express');
var path = require('path');

var PWD = process.env.PWD;
var app = express();
var publicDir = path.resolve(PWD, '/client/');

app.use('/', express.static(publicDir));
app.listen(8080);
