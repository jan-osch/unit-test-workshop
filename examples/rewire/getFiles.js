let fs = require('fs') // eslint-disable-line prefer-const

exports.getAllJsFiles = (dir, callback) => fs.readdir(dir, (err, files) => {
    if (err) {
        return callback(err)
    }

    const jsFileRegex = /.js$/
    const filteredFiles = files.filter(file => jsFileRegex.test(file))

    return callback(null, filteredFiles.length)
})
