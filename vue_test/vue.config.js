module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
    },
  },
  // 关闭语法检查
  lintOnSave: false
}