require("dotenv").config();
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack"); // to access built-in plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

const Manifest = require("./src/public/manifest.json");
const srcPath = "src";
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: path.resolve(__dirname, srcPath, "index.tsx"),
  resolve: {
    extensions: [".ts", ".tsx", ".js", "scss"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: "pre",
        use: [
          {
            loader: "tslint-loader",
            options: {}
          }
        ]
      },
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "[path][name].[ext]" }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode
        ? "[name].css"
        : "static/css/[name].[Chunkhash].chunk.css",
      chunkFilename: devMode
        ? "[id].css"
        : "static/css/[id].[Chunkhash].chunk.css"
    }),
    new ManifestPlugin({
      seed: Manifest
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "My React",
      publicUrl: process.env.PUBLIC_URL,
      template: path.resolve(__dirname, srcPath, "public", "index.html"),
      favicon: path.resolve(__dirname, srcPath, "public", "favicon.ico"),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
      meta: {
        viewport: "width=device-width, initial-scale=1",
        "theme-color": "#000000"
      }
    })
  ]
};
