const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: "production",
  entry: './components/index.js',
  output: {
    filename: 'com_vue2.js',
    path: path.resolve(__dirname, '../lib'),
    library: 'input-ui',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  externals: {
    vue: 'vue'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
      },
      // {
      //   test: /\.(png|gif|jpg)$/,
      //   loader: 'url-loader',
      // },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
};