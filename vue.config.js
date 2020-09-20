module.exports = {
  devServer: {
    proxy: {
      '/hehe': {
        target: 'https://m.you.163.com',// 请求的目标地址
        changeOrigin: true,// 是否改变请求地址（是否跨域）
        pathRewrite: {// 重写请求地址
          '^/hehe': ''// 把所有请求开头为'/hehe'地址，把'/hehe'替换成''
        }
      }
    }
  }
}
