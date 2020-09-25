// what is this??? process.stdout.write
// how do we see the methods to stdout? ie: write, on
// similar to using chrome dev tools in the browser

// how can we console.log() in the terminal?


// this creates a prompt function
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    
    let cmd = data.toString().trim()
    cmd = cmd.split(" ")

    if (cmd[0] === 'pwd') {
        require('./pwd');
    } else if (cmd[0] === 'ls'){
        require("./ls")
    }else if (cmd[0] === 'cat'){
        require("./cat")
        module.exports = cmd[1]
    }
    else {
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    }
});



