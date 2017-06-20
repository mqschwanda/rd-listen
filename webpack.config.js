/* webpack.config.js */

// var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
  entry: [
    './imports/startup/client/index.js',
  ],
  module: {
    loaders: [{
      test: /\.(js|jsx)?$/,
      exclude: /node_modules/,
      // loader: process.env.NODE_ENV === 'production' ? 'babel-loader' : 'react-hot-loader',
      loader: 'babel-loader!react-hot-loader',
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
    path: `${__dirname}/client/bundle`,
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

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false }, minimize: true })
  );
} else {
  config.entry.push(
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080'
  );
}

module.exports = config;
