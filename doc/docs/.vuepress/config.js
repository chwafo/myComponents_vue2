const path = require('path');
module.exports = {
  dest: path.resolve(__dirname, '../../../docs'),
  base: "/docs/",
  markdown: {
    title: '99999',
    description: '88888',
    lineNumbers: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': './'
      }
    }
  },
  themeConfig: {
    sidebar: [
      '/',
      ['/barrage', '弹幕'],
      ['/lazyList', '下拉刷新列表'],
    ]
  }
}