const PATH = require('path')
const webpack = require('webpack')

const basicVueModule = require('../../__share/webpackConfig/basicVueModule.js')
const devtool = require('../../__share/webpackConfig/devtool.js')

module.exports = Object.assign(
    {},
    basicVueModule,
    devtool
)