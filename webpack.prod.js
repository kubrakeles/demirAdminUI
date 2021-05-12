const path = require("path");
const common= require("./webpack.common");
const {merge}=require("webpack-merge");
const {CleanWebpackPlugin}=require("clean-webpack-plugin");
const {UnusedWebpackPlugin }=require('unused-webpack-plugin');


module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins:[
    new CleanWebpackPlugin()
  ]
});