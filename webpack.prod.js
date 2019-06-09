const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");

const settings = {
  distPath: path.resolve(__dirname, "dist")
};

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[hash].bundle.js",
    path: settings.distPath
  }
});
