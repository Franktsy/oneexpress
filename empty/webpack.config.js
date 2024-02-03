const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');

module.exports = {
  entry: './public/src/main.js',
  output: {
    filename: 'vue.js',
    path: path.resolve(__dirname, 'public/dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        include: [path.resolve(__dirname, 'public/src')],
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'development',
  plugins: [new VueLoaderPlugin(),
            new webpack.HotModuleReplacementPlugin(),
  ],
  devServer:{
    host:'0.0.0.0',
    port: 8081,
    hot: true,
    watchFiles: ['public/src/**/*'],
  },
  watchOptions: {
   poll: 1000,
 },

};
