const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/webgui-server/': {
        target: 'https://cityos.unicloud.com:1443/',
        changeOrigin: true
      },
      'webgui-preview-file':{
        target: 'https://cityos.unicloud.com:1443/',
        changeOrigin: true
      },
    }
  }
})
