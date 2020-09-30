//module.exports = process.stdout.write(fs.readdir())
// why no module.exports here??? why does this work?

// fs is the file system module
// it is available
const fs = require('fs');

// an asynchronous operation
// its return value is undefined
fs.readdir('./','utf8',(err, files) => {
    if (err){
        throw err
    }else{
        process.stdout.write(files.join('\n'))
        process.stdout.write("prompt > ")
    }
})