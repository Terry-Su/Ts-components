const RootShare = require('../../__share/nodeConfig/index')


module.exports = {
    getWebpack() {
       return RootShare.getBasicWebpackConfig()
    },
    getHtml() {
        return RootShare.getBasicHtml()
    }
}