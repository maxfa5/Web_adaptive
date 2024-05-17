const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    requireModuleExtension: false,
    loaderOptions: {

      scss: {
        additionalData: `@import "~@/assets/style.scss";`
      },
    }
  }
})
