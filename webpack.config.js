const path = require("path");
const pkg = require("./package.json");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: pkg.name,
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  target: "node",
  externals: [nodeExternals()],
};
