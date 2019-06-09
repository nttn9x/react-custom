const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "index.bundle.js"
  },
  devtool: "inline-source-map"
});
