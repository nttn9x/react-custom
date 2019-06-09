const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack"); // to access built-in plugins
const CleanWebpackPlugin = require("clean-webpack-plugin");

const srcPath = "src";
const distPath = path.resolve(__dirname, "dist");

module.exports = {
  entry: path.resolve(__dirname, srcPath, "index.js"),
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, srcPath),
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin([distPath], {
      verbose: true
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, srcPath, "public", "index.html"),
      title: "My life"
    })
  ]
};
