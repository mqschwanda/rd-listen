/* eslint-disable no-var, prefer-arrow-callback, prefer-template */

var express = require('express');
var path = require('path');

var app = express();
var publicDir = path.resolve(__dirname, '../../../', 'public');

app.use('/', express.static(publicDir));
app.listen(process.env.PORT || 8080);
