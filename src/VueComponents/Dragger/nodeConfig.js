const RootShare = require('../../__share/nodeConfig/index')

module.exports = {
    getWebpack() {
       return RootShare.getWebpackConfigByDirname(__dirname)
    },
    getHtml() {
        return RootShare.getBasicHtml()
    }
}