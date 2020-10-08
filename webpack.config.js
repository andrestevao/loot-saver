const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "app.jsx"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        resolve: {
          extensions: [".js", ".jsx"],
        },
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
          {
            loader: "eslint-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    compress: true,
    port: 8000,
    historyApiFallback: true,
  },
  devtool: "eval-cheap-module-source-map",
};
