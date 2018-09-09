const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  resolve: {
    alias: {
      actions: path.join(__dirname, 'src/js/actions'),
      components: path.join(__dirname, 'src/js/components'),
      constants: path.join(__dirname, 'src/js/constants'),
      reducers: path.join(__dirname, 'src/js/reducers'),
      store: path.join(__dirname, 'src/js/store'),
    },
    extensions: ['.webpack.js', '.web.js', '.js', '.yml', '.style.js'],
  },
};
