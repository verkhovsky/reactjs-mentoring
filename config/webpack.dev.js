const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1 },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, '../build'),
    compress: true,
    port: 8080,
    open: true,
    hot: true,
  },
  plugins: [
    // Only update what has changed on hot reload
    new HotModuleReplacementPlugin(),
  ],
};
