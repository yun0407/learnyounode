const fs = require('fs')
const path = require('path')

module.exports = (filepath, fileExt, callback) => {
    fs.readdir(filepath, (err, list) => {
        if (err) {
            callback(err)
            return 
        }
        
        
        const filtered = list.filter(function (file) {
            return path.extname(file) === "." + fileExt

        })

        callback(err,filtered)

    })
}
        
        
