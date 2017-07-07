/* eslint-disable */

var writeHtaccess = require('./helpers/write-htaccess');
var buildWebpack = require('./helpers/build-webpack');
var startServer = require('./helpers/start-server');

writeHtaccess().then(function() {
  buildWebpack();
}).then(function() {
  startServer();
}).catch(function(e) { console.log(e); });
