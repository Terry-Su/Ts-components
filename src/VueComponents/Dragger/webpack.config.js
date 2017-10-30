const PATH = require('path')
const basicVueModule = require('../../__share/webpackConfig/basicVueModule.js')
const devtool = require('../../__share/webpackConfig/devtool.js')
const webpack = require('webpack')

module.exports = Object.assign(
    {},
    basicVueModule,
    devtool
)