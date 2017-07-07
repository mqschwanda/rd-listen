echo Building App for heroku... &&

NODE_ENV=production &&

./node_modules/.bin/webpack -p --progress --colors --config ./config/webpack.js  &&

echo Build Complete!
