export default {
  dev: 'NODE_ENV=development && node -r babel-register ./node_modules/webpack-dev-server/bin/webpack-dev-server -d --progress --colors --watch --config ./config/webpack.babel.js',
  lint: 'eslint ./**.js',
  buildWebpack: ' node -r babel-register ./node_modules/.bin/webpack -p --progress --colors --config ./config/webpack.babel.js',
  startServer: 'NODE_ENV=production && node -r babel-register ./imports/startup/server/index.js',
  test: 'echo Error: no test specified && exit 1',
};
