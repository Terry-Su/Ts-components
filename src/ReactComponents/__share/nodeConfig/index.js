const PATH = require('path')
const decache = require('decache')


module.exports = {
    getBasicWebpackConfig() {
        const webpackPath = PATH.resolve(__dirname, '../webpackConfig/webpack.base.config')
        decache(webpackPath)
        return require(webpackPath)
    },
    getBasicHtml() {
        const htmlPath = PATH.resolve(__dirname, './static/index.html')
        return {
            content: FS.readFileSync(htmlPath, {encoding: 'utf8'})
        }
    }
}