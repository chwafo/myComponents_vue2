module.exports = {
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
      ['/barrage', '弹幕']
    ]
  }
}