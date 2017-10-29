const PATH = require('path')
const mvvc = require('../../MP/index.js')

mvvc.init({
    mpConfigPath: PATH.resolve(__dirname, '../src/mvvc.config.js')
})