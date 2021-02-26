const paths = require('./paths');
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  // Set the mode to development or production
  // Установка режима разработки или продакшна
  mode: 'development',

  // Control how source maps are generated
  // Управление созданием карт источников
  devtool: 'inline-source-map',

  resolve: {
    alias: {
      '@js': path.resolve(__dirname, '../src/js'),
    },
    extensions: ['.js', '.jsx'],
  },

  // Spin up a server for quick development
  // Запуск сервера для разработки
  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    open: 'Chrome',
    compress: true,
    hot: true,
    port: 8080,
  },

  plugins: [
    // Only update what has changed on hot reload
    // Обновлять только при "горячей" перезагрузке
    new webpack.HotModuleReplacementPlugin(),
  ],
})
