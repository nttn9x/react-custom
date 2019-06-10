const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const settings = {
  distPath: path.resolve(__dirname, "dist")
};

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "static/js/[name].[hash].bundle.js",
    chunkFilename: "static/js/[name].[hash].bundle.js",
    path: settings.distPath
  },
  plugins: [
    new CleanWebpackPlugin([settings.distPath], {
      verbose: true
    })
  ]
});
