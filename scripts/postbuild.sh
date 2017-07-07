echo Building App for heroku...

NODE_ENV=production &&
./node_modules/.bin/webpack -p --progress --colors --config ./webpack.config.babel.js

echo Build Complete!
