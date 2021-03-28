const path = require('path');
const { DefinePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./config.json');

const environment = process.env.ENVIRONMENT || 'dev';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '../build'),
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpe?g)$/i,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
    alias: {
      src: path.resolve(__dirname, '../src'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: './src/assets/',
          to: './assets',
        },
      ],
    }),
    new DefinePlugin({
      'process.env.ENV': JSON.stringify(environment),
      'process.env.API_URL': JSON.stringify(config.BASE_API_URL),
    }),
  ],
};
