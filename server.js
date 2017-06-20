/* eslint-disable no-var, prefer-arrow-callback, prefer-template */

var express = require('express');
var path = require('path');

var app = express();
var publicDir = path.join(__dirname, '/client/');

// viewed at http://localhost:8080
// app.get('/', function (req, res) {
//   res.sendFile(path.join(publicDir, 'index.html'));
// });

app.use('/', express.static(publicDir));

// app.use('/', express.static(path.join(publicDir, 'index.html')));

app.listen(8080);
