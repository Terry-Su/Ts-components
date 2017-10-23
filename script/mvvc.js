const PATH = require('path')
const mvvc = require('../../MVVC/index.js')

mvvc.init({
    mvvcConfigPath: PATH.resolve(__dirname, '../src/mvvc.config.js')
})