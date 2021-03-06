const paths = require("./paths");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

process.env.BABEL_ENV = "production"; // babel-preset-react-app needs process.env.BABEL_ENV to build react-hook 16.8

module.exports = merge(common, {
  mode: "production",
  output: {
    publicPath: "/", // if you don't put the "/" here, you get this error: "bundle.js:1 Uncaught SyntaxError: Unexpected token <"
    filename: "static/js/[name].[chunkhash].bundle.js",
    chunkFilename: "static/js/[name].[chunkhash].bundle.chunk.js", // lazy loading routes
    path: paths.dist,
  },
  optimization: {
    // all: minify css, js
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        // build scss to css
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true, // able to import file .scss | add declaration.d.ts | className={style.??}
            },
          },
          "sass-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "static/css/[name].[contenthash].css",
      chunkFilename: "static/css/[id].[contenthash].chunk.css",
    }),

    new CleanWebpackPlugin([paths.dist], {
      // clean before build source
      verbose: true,
    }),
  ],
});
