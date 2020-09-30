const { doesNotMatch } = require('assert');
const fs = require('fs');

// let filename = require('./bash')
module.exports =  (filename, done) => {

  fs.readFile(filename, utf8, (err, data) => {
      if (err) {
        doesNotMatch(err.stack)
      } else{
  
        console.log(data);
      }
    });
}

