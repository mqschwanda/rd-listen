/* webpack.config.js */

/* eslint-disable no-var, comma-dangle */

var HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var appDir = path.resolve(__dirname, '../');
var isDev = process.env.NODE_ENV === 'development';
var isProd = process.env.NODE_ENV === 'production';

module.exports = {
  context: path.resolve(appDir), // the base directory for resolving entry points and loaders from configuration
  entry: [ // the point or points to enter the application
    path.join(appDir, 'imports/startup/client/index.js')
  ],
  module: {
    loaders: [{
      test: /\.(js|jsx)?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['es2015', 'react', 'stage-2'],
        plugins: [
          'transform-react-jsx',
          'transform-decorators-legacy',
          'transform-class-properties'
        ]
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(ttf|eot|woff|woff2)$/,
      loader: 'file-loader',
      options: { name: 'fonts/[name].[ext]' }
    }]
  },
  resolve: {
    alias: {
      reducers: path.resolve(appDir, 'imports/reducers'),
      modules$: path.resolve(appDir, 'imports/modules/index.js'),
      components$: path.resolve(appDir, 'imports/ui/components/index.js'),
      containers$: path.resolve(appDir, 'imports/ui/containers/index.js'),
      layouts$: path.resolve(appDir, 'imports/ui/layouts/index.js')
    },
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.join(appDir, 'public'), // the output directory as an absolute path
    pathinfo: isDev, // include comments in bundles with information about the contained modules
    publicPath: '', // the prefix to every URL created by the runtime or loaders
    filename: 'bundle/index.js' // the name of the output bundle
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Radio Disney Listen',
      filename: 'index.html',
      appMountId: 'app',
      mobile: true,
      devServer: 'http://localhost:8080',
      template: path.resolve(appDir, 'imports/ui/templates/index.ejs'),
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: !isProd,
        removeComments: isProd
      }
    })
  ],
  devtool: 'source-map',
  devServer: {
    compress: true, // enable gzip compression for everything served
    contentBase: path.join(appDir, 'public'), // tell the server where to serve static files from
    watchContentBase: true, // content base file changes will trigger a full page reload
    publicPath: '', // the prefix to every URL created by the runtime or loaders
    hot: true, // enable webpack's hot module replacement feature
    overlay: { // shows a full-screen overlay in the browser when there are compiler errors or warnings
      warnings: true,
      errors: true
    }
  }
};
