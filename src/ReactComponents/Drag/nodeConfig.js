const Share = require('../__share/nodeConfig/index')


module.exports = {
    getWebpack() {
       return Share.getBasicWebpackConfig()
    },
    getHtml() {
        return Share.getBasicHtml()
    }
}