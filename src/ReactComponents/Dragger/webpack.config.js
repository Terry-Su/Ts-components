const PATH = require('path')
const basicReactModule = require('../../__share/webpackConfig/basicReactModule.js')
const devtool = require('../../__share/webpackConfig/devtool.js')
const webpack = require('webpack')

module.exports = Object.assign(
    {},
    basicReactModule,
    devtool,
    {
        resolve: {
            alias: {
                Util: PATH.resolve(__dirname, './util'),
                DraggerFiber: PATH.resolve(__dirname, './draggerFiber/index'),
                'src':  PATH.resolve(__dirname, '../../'),
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                Util: 'Util',
                Fp: PATH.resolve(__dirname, './fp/index')
            })
        ],
    }
)