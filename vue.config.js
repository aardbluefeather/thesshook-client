const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../thesshook-server/server/public'),

  devServer: {
    disableHostCheck: true,
  },

  transpileDependencies: ['vue-world-map', 'vuetify'],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
}
