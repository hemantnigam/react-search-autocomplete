const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "demo/index.js"),
  output: {
    path: path.resolve(__dirname, "demo/dist"),
    filename: "index.js",
  },
  devServer: {
    port: "3000",
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(scss|css|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React Search Autocomplete",
      filename: "index.html",
      template: path.resolve(__dirname, "demo/index.html"),
    }),
  ],
  resolve: {
    extensions: [".jsx", ".js"],
  },
};
