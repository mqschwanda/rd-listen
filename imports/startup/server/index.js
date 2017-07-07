/* eslint-disable no-var, prefer-arrow-callback, prefer-template */

var express = require('express');
var path = require('path');

var appDir = path.resolve(__dirname, '../../../');
var app = express();
var publicDir = path.resolve(appDir, 'public');

app.use('/', express.static(publicDir));
app.listen(8080);
