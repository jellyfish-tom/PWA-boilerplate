const webpack = require("webpack")
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const OfflinePlugin = require('offline-plugin');

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OfflinePlugin()
  ]
});