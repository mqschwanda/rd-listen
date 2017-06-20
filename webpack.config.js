/* webpack.config.js */

/* eslint-disable no-var */

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './imports/startup/client/index.js',
  ],
  module: {
    loaders: [{
      test: /\.(js|jsx)?$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader!babel-loader',
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    }, {
      test: /\.(ttf|eot|woff|woff2)$/,
      loader: 'file-loader',
      options: { name: 'fonts/[name].[ext]' },
    }],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: `${__dirname}/client`,
    publicPath: '/bundle',
    filename: 'index.js',
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: 'Radio Disney Listen',
    //   filename: 'index.html',
    // }),
  ],
  devServer: {
    contentBase: './client',
    hot: true,
  },
};
