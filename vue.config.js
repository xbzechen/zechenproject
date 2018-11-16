const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'procution' ? '/iview-admin/' : '/'

module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  // chainWebpack: config => {
  //   config.resolve.alias
  //     .set('@', resolve('src'))
  //     .set('_com', resolve('src/components'))
  // },
  configureWebpack: (config) => {
    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js', // 'vue/dist/vue.common.js' for webpack 1
          '@': resolve('src'),
          '_com': resolve('src/components')
        }
      }
    })
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  // 跨域
  devServer: {
    //proxy: 'http://192.168.7.216:8080' // 服务器
     proxy: 'http://192.168.7.189:8080' // 龙哥
  }
}
