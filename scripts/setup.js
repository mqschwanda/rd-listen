/* eslint-disable */

var writeHtaccess = require('./write-htaccess');
var buildWebpack = require('./build-webpack');

writeHtaccess().then(function() {
  buildWebpack();
}).catch(function(e) { console.log(e); });
