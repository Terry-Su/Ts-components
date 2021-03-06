const PATH = require('path')


module.exports = {
    srcPath: PATH.resolve(__dirname, '../src'),
    outputPath: PATH.resolve(__dirname, '../pulic'),
    relativePathsToOutput: [
        './static',
    ],
    ignoredFolders: [
        '__share',
        'Template',
    ],

    outputServer: {
        port: 3100,
        open: false
    },
    readlineCommands: {
        // 1: [1],
        // 2: [0], 
        3: [3], 
    },
}