// Not: import yerine const/require kullanıyoruz.
const postcssGlobalData = require('@csstools/postcss-global-data')
const postcssNested = require('postcss-nested')
const postcssCustomMedia = require('postcss-custom-media')

module.exports = {
  plugins: [
    postcssGlobalData({
      files: ['./src/assets/media.css']
    }),
    postcssNested(),
    postcssCustomMedia()
  ]
}
