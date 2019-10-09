"use strict";

var webpack = require("webpack");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },

  entry: "./index.js",

  output: {
    library: "bcPdftron",
    libraryTarget: "umd"
  }
};
