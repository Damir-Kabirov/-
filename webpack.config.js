const path = require('path');
const CopyPlugin = require("copy-webpack-plugin"); // Подключаем плагин

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  devtool: 'source-map',
  plugins: [
    new CopyPlugin({
     patterns: [{ from: 'public' }], // Добавляем плагин в сборку и указываем директорию, откуда нужно скопировать файлы
    }),
  ],
  module: {
        rules: [
            {
              test: /\\.js$/, // Указываем регулярным выражением, что преобразовывать нужно только JavaScript-файлы
              exclude: /(node_modules)/, // Уточняем, что файлы из директории node_modules трогать не нужно
              use: ['babel-loader'] // Указываем, какой лоадер использовать
           }
        ]
      }
};