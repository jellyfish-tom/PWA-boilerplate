const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    app: ["./src/app/App.tsx", "webpack-hot-middleware/client"],
    vendor: ["react", "react-dom"]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new CopyWebpackPlugin([
        "src/app/public"
    ]),
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, "src", "app", "index.html") }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
  },
  module: {
    rules: [
        {
            test: /\.(ts|tsx)$/,
            loader: "ts-loader"
        },
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader",
          exclude: [/node_modules\/mutationobserver-shim/]
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }
    ]
  },
};