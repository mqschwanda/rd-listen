/* eslint-disable max-len */
export default {
  dev: 'NODE_ENV=development node -r babel-register ./node_modules/webpack-dev-server/bin/webpack-dev-server -d --progress --colors --watch --config ./config/webpack.js',
  lint: 'eslint . --ext=.js',
  buildWebpack: ' node -r babel-register ./node_modules/.bin/webpack -p --progress --colors --config ./config/webpack.js',
  startServer: 'NODE_ENV=production node -r babel-register ./imports/startup/server/index.js',
  test: './node_modules/mocha/bin/mocha ./**/*.tests.js --compilers js:babel-core/register',
};
