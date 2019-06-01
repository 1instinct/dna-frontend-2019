/* global require module __dirname */
const path = require("path");
const webpack = require("webpack");
const WriteFilePlugin = require("write-file-webpack-plugin"); // here so you can see what chunks are built
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  name: "client",
  target: "web",
  devtool: "inline-source-map",
  mode: "development",
  entry: [
    "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false",
    "react-hot-loader/patch",
    path.resolve(__dirname, "../src/index.js")
  ],
  output: {
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
    path: path.resolve(__dirname, "../buildClient"),
    publicPath: "/static/"
  },
  cache: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(gif|jpe?g|png|ico)$/,
        loader: "url-loader?limit=10000"
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
        loader: "url-loader?limit=10000"
      },
      {
        test: /\.styl$/,
        use: [
          ExtractCssChunks.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]__[local]--[hash:base64:5]"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".css"]
  },
  plugins: [
    new Dotenv({
      systemvars: true
    }),
    new WriteFilePlugin(),
    new ExtractCssChunks(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    })
  ]
};
