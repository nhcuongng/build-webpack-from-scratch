const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index'),
  // The output property tells Webpack where to put our bundled code
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // resolve property allows us to specify which extensions Webpack will resolve
  resolve: { extensions: ["*", ".js", ".jsx"] },
  module: {
    rules: [
      {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      include: path.resolve(__dirname, 'src'),
      use: ['babel-loader']
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }
  ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html" //source html
    }),
  ]
};