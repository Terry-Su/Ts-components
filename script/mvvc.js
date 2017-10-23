const PATH = require('path')
// const mvvc = require('../../MVVC/index.js')
const mp = require('../../MP/index.js')


mp.init({
    mpConfigPath: PATH.resolve(__dirname, '../src/mvvc.config.js')
})