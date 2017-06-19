/* webpack.config.js */
module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './imports/startup/client/index.js',
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader!babel-loader',
    }, {
      test: /\.css$/,
      loader: 'css-loader',
      options: {
        modules: true,
        localIdentName: '[path][name]_[local]--[hash:base64:8]',
      },
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
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './client',
    hot: true,
  },
};
