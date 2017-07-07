/* eslint-disable */

var fs = require('fs');
var path = require('path');

module.exports = function() {
  return new Promise(function(resolve, error) {
    if (!fs.existsSync(path.resolve(__dirname, '../.htaccess'))) {
      console.log('\n#############################\n# Creating Apache Config... #\n#############################\n');
      var stream = fs.createWriteStream('.htaccess');
      stream.once('open', (fd) => {
          stream.write('<ifModule mod_rewrite.c>\n');
          stream.write('\n');
          stream.write('  #######################################################################\n');
          stream.write('  # GENERAL                                                             #\n');
          stream.write('  #######################################################################\n');
          stream.write('\n');
          stream.write('  # Make apache follow sym links to files\n');
          stream.write('  Options +FollowSymLinks\n');
          stream.write('  # If somebody opens a folder, hide all files from the resulting folder list\n');
          stream.write('  IndexIgnore */*\n');
          stream.write('\n');
          stream.write('  #######################################################################\n');
          stream.write('  # REWRITING                                                           #\n');
          stream.write('  #######################################################################\n');
          stream.write('\n');
          stream.write('  # Enable rewriting\n');
          stream.write('  RewriteEngine On\n');
          stream.write('\n');
          stream.write('  # If its not HTTPS\n');
          stream.write('  RewriteCond %{HTTPS} off\n');
          stream.write('\n');
          stream.write('  # Comment out the RewriteCond above, and uncomment the RewriteCond below if you\'re using a load balancer (e.g. CloudFlare) for SSL\n');
          stream.write('  # RewriteCond %{HTTP:X-Forwarded-Proto} !https\n');
          stream.write('\n');
          stream.write('  # Redirect to the same URL with https://, ignoring all further rules if this one is in effect\n');
          stream.write('  RewriteRule ^(.*) https://%{HTTP_HOST}/$1 [R,L]\n');
          stream.write('\n');
          stream.write('  # If we get to here, it means we are on https://\n');
          stream.write('\n');
          stream.write('  # If the file with the specified name in the browser doesn\'t exist\n');
          stream.write('  RewriteCond %{REQUEST_FILENAME} !-f\n');
          stream.write('\n');
          stream.write('  # and the directory with the specified name in the browser doesn\'t exist\n');
          stream.write('  RewriteCond %{REQUEST_FILENAME} !-d\n');
          stream.write('\n');
          stream.write('  # and we are not opening the root already (otherwise we get a redirect loop)\n');
          stream.write('  RewriteCond %{REQUEST_FILENAME} !\/$\n');
          stream.write('\n');
          stream.write('  # Rewrite all requests to the root\n');
          stream.write('  RewriteRule ^(.*) /\n');
          stream.write('\n');
          stream.write('</ifModule>\n');
          return stream.end(function() {
            console.log('Apache Config File Created!');
            return resolve();
          });
      });
    } else {
      console.log('Apache Config File Already Exists');
      return resolve();
    }
  });
}
