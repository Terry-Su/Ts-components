const PATH = require('path')
const mp = require('ts-mp')

mp.init({
    mpConfigPath: PATH.resolve(__dirname, '../src/mvvc.config.js')
})