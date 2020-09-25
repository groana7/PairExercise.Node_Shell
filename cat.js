const fs = require('fs');

let filename = require('./bash')
module.exports =  fs.readFile(`${./filename}`, (err, data) => {
    //if (err) throw err;
    console.log(`${./filename}`);
  });