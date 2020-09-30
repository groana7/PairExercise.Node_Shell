// how can we console.log() in the terminal?
// console.log(Object.keys(process.stdout)) 

// this creates a prompt function
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    
    let cmd = data.toString().trim()
    cmd = cmd.split(" ")

    if (cmd[0] === 'pwd') {
        require('./pwd'); // don't need to write .js because it knows it's a js file
    } else if (cmd[0] === 'ls'){
        require("./ls")
    }else if (cmd[0] === 'cat'){
        require("./cat")(cmd[1], cmd[0])
        // module.exports = cmd[1]
    }
    else {
        // solution video shows why console.log('You typed: ' + data) doesn't work... it would log the binary of the string
        // would need to do data.toString
        // this is console.log under the hood
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    }
});



