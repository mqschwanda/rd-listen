/* eslint-disable */

var writeHtaccess = require('./helpers/write-htaccess');
var buildWebpack = require('./helpers/build-webpack');

writeHtaccess().then(function() {
  buildWebpack();
}).catch(function(e) { console.log(e); });
