const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //
  //
  // },
  devServer: {
        hot: true,
        port: 8082,
    },
    // watch: true,
    // watchOptions: {
    //     ignored: /node_modules/,
    //     poll: 1000,
    // },
})
