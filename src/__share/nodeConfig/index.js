const PATH = require('path')
const decache = require('decache')


module.exports = {
    getBasicWebpackConfig() {
        const webpackPath = PATH.resolve(__dirname, '../webpackConfig/webpack.react.config')
        decache(webpackPath)
        return require(webpackPath)
    },
    getVueWebpackConfig() {
        const webpackPath = PATH.resolve(__dirname, '../webpackConfig/webpack.vue.config')
        decache(webpackPath)
        return require(webpackPath)
    },
    getWebpackConfigByDirname(dirname) {
        const webpackPath = PATH.resolve(dirname, './webpack.config.js')
        decache(webpackPath)
        return require(webpackPath)
    },
    getBasicHtml() {
        const htmlPath = PATH.resolve(__dirname, './static/index.html')
        return {
            content: FS.readFileSync(htmlPath, {encoding: 'utf8'})
        }
    },
}