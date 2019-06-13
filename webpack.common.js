require("dotenv").config();
const path = require("path");
const paths = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack"); // to access built-in plugins
const ManifestPlugin = require("webpack-manifest-plugin");

const Manifest = require("./src/public/manifest.json");
const srcPath = "src";

module.exports = {
    entry: paths.main,
    resolve: {
        // kinds of file what webpack will work
        extensions: [".ts", ".tsx", ".js", ".jsx", ".scss", ".css"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                enforce: "pre",
                use: [
                    {
                        loader: "tslint-loader",
                        options: {},
                    },
                ],
            },
            {
                // ts to js to pure js
                test: /\.(js|jsx|ts|tsx)?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                        },
                    },
                    {
                        loader: "file-loader",
                        options: { name: "[path][name].[ext]" },
                    },
                ],
            },
        ],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new ManifestPlugin({
            // generate manifest.json
            seed: Manifest,
        }),
        new HtmlWebpackPlugin({
            // generate index.html
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
                useShortDoctype: true,
            },
            meta: {
                viewport: "width=device-width, initial-scale=1",
                "theme-color": "#000000",
            },
        }),
    ],
    devServer: {
        contentBase: paths.dist,
        historyApiFallback: true, //The HTML5 History API gives developers the ability to modify a website's URL without a full page refresh
        compress: true,
    },
};
