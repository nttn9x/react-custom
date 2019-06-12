const merge = require("webpack-merge");
const common = require("./webpack.common");

process.env.NODE_ENV = "development";
process.env.BABEL_ENV = "development";

module.exports = merge(common, {
    mode: "development",
    output: {
        publicPath: "/",
        filename: "static/js/[name].bundle.js",
        chunkFilename: "static/js/[name].bundle.js",
    },
    optimization: {
        splitChunks: {
            // include all types of chunks
            chunks: "all",
        },
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
            },
        ],
    },
    devtool: "inline-source-map",
});
