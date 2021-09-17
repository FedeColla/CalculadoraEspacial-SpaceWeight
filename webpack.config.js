const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin"),
MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
entry: './src/index.js',
output:{
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
},
    module:{
        rules:[
            {
                test:/\.js$/i,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use:[
                    {
                    loader: MiniCssExtractPlugin.loader,
                        options:{
                            publicPath: "./",
                        },
                    },
                    "css-loader", "sass-loader"
                ],
            },
            {
                test: /\.(gif|jpg|png|svg|webp|ico)$/i,
                use:["file-loader?name=assets/[name].[ext]", "image-webpack-loader"],
            },
            {
                test: /\.jpeg/,
                type: 'asset/resource'
            },
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/index.template.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin(),
    ],
};