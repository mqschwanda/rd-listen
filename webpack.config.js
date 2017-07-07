/* webpack.config.js */

/* eslint-disable no-var, comma-dangle */

var HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin;
var path = require('path');

var isDev = process.env.NODE_ENV === 'development';

module.exports = {
  context: path.resolve(__dirname), // the base directory for resolving entry points and loaders from configuration
  entry: [ // the point or points to enter the application
    path.join(__dirname, 'imports', 'startup', 'client', 'index.js')
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
      reducers: path.resolve(__dirname, 'imports/reducers'),
      modules$: path.resolve(__dirname, 'imports/modules/index.js'),
      components$: path.resolve(__dirname, 'imports/ui/components/index.js'),
      containers$: path.resolve(__dirname, 'imports/ui/containers/index.js'),
      layouts$: path.resolve(__dirname, 'imports/ui/layouts/index.js')
    },
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'client', 'bundle'), // the output directory as an absolute path
    pathinfo: isDev, // include comments in bundles with information about the contained modules
    publicPath: '/bundle/', // the prefix to every URL created by the runtime or loaders
    filename: 'index.js' // the name of the output bundle
  },
  plugins: [
    new HotModuleReplacementPlugin()
  ],
  devtool: 'source-map',
  devServer: {
    compress: true, // enable gzip compression for everything served
    contentBase: path.join(__dirname, 'client'), // tell the server where to serve static files from
    watchContentBase: true, // content base file changes will trigger a full page reload
    publicPath: '/bundle/', // the prefix to every URL created by the runtime or loaders
    hot: true, // enable webpack's hot module replacement feature
    overlay: { // shows a full-screen overlay in the browser when there are compiler errors or warnings
      warnings: true,
      errors: true
    }
  }
};
