const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')

    // Mevcut tüm loader'ları temizle
    svgRule.uses.clear()

    // Webpack 5 asset type'ını sil (ÖNEMLİ: Bu satır olmazsa hata alabilirsin)
    svgRule.delete('type')

    svgRule
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
})
