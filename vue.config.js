const path = require('path')

const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
  chainWebpack: webpackConfig => {

    webpackConfig.resolve.alias
      .set('@', resolve('src'))
      .set('styles', resolve('src/styles/_styles.scss'))
  }
}