module.exports = {
    devServer: {
        port: 8080, // 设置端口号
        host: 'localhost',
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
    },
    lintOnSave: false // 关闭eslint语法检查
}