/* eslint-disable */

var fs = require('fs');
var path = require('path');

var contentArray = [
  '<ifModule mod_rewrite.c>\n',
  '\n',
  '  #######################################################################\n',
  '  # GENERAL                                                             #\n',
  '  #######################################################################\n',
  '\n',
  '  # Make apache follow sym links to files\n',
  '  Options +FollowSymLinks\n',
  '  # If somebody opens a folder, hide all files from the resulting folder list\n',
  '  IndexIgnore */*\n',
  '\n',
  '  #######################################################################\n',
  '  # REWRITING                                                           #\n',
  '  #######################################################################\n',
  '\n',
  '  # Enable rewriting\n',
  '  RewriteEngine On\n',
  '\n',
  '  # If its not HTTPS\n',
  '  RewriteCond %{HTTPS} off\n',
  '\n',
  '  # Comment out the RewriteCond above, and uncomment the RewriteCond below if you\'re using a load balancer (e.g. CloudFlare) for SSL\n',
  '  # RewriteCond %{HTTP:X-Forwarded-Proto} !https\n',
  '\n',
  '  # Redirect to the same URL with https://, ignoring all further rules if this one is in effect\n',
  '  RewriteRule ^(.*) https://%{HTTP_HOST}/$1 [R,L]\n',
  '\n',
  '  # If we get to here, it means we are on https://\n',
  '\n',
  '  # If the file with the specified name in the browser doesn\'t exist\n',
  '  RewriteCond %{REQUEST_FILENAME} !-f\n',
  '\n',
  '  # and the directory with the specified name in the browser doesn\'t exist\n',
  '  RewriteCond %{REQUEST_FILENAME} !-d\n',
  '\n',
  '  # and we are not opening the root already (otherwise we get a redirect loop)\n',
  '  RewriteCond %{REQUEST_FILENAME} !\/$\n',
  '\n',
  '  # Rewrite all requests to the root\n',
  '  RewriteRule ^(.*) /\n',
  '\n',
  '</ifModule>\n',
];

module.exports = function() {
  return new Promise(function(resolve, error) {
    if (!fs.existsSync(path.resolve(__dirname, '../.htaccess'))) {
      console.log('\n#############################\n# Creating Apache Config... #\n#############################\n');
      var stream = fs.createWriteStream('.htaccess');
      stream.once('open', (fd) => {
        for (var i = 0; i < contentArray.length;) {
          stream.write(contentArray[i]);
          if (contentArray.length - 1 === i) {
            return stream.end(function() {
              console.log('Apache Config File Created!');
              return resolve();
            });
          } else { i += 1; }
        }
      });
    } else {
      console.log('Apache Config File Already Exists');
      return resolve();
    }
  });
}
