const Path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  plugins: [
    /*
     * CleanWebpackPlugin will clear dist folder.
     */
    new CleanWebpackPlugin(),
    /*
     * Will copy specifid files into dist folder.
     */
    new CopyWebpackPlugin([
      {
        from: Path.resolve(__dirname, "./src/assets"),
        to: "assets"
      },
      {
        from: Path.resolve(__dirname, "./src/index.html"),
        to: ""
      }
    ])
  ],
  module: {
    rules: [
      {
        /*
         * For all .js files, except the one in node_modules,
         * use babel loader, which will use .babelrc config,
         * to prepare ES5 compatible code.
         */
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      /*
       * Will put styles from scss files into js bundel.
       */
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
