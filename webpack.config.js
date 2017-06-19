// webpack.config.js
module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './imports/startup/client/index.js',
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader!babel-loader',
    }, {
      test: /\.css$/,
      use: {
        loader: 'css-loader',
        options: {},
      },
    }, {
      test: /\.(ttf|eot|woff|woff2)$/,
      loader: 'file-loader',
      options: {
        name: 'fonts/[name].[ext]',
      },
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
