const PATH = require('path')


module.exports = {
    srcPath: PATH.resolve(__dirname, '../src'),
    outputPath: PATH.resolve(__dirname, '../pulic'),
    ignoredFolders: [
        '__share',
        'Template',
    ],
    outputServer: {
        port: 3100,
    },
    readlineCommands: {
        1: [0],
    },
}