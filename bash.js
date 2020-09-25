// what is this??? process.stdout.write
// how do we see the methods to stdout? ie: write, on
// similar to using chrome dev tools in the browser

// how can we console.log() in the terminal?


// this creates a prompt function
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    
    const cmd = data.toString().trim()

    if (cmd === 'pwd') {
        require('./pwd');
        //process.stdout.write(process.cwd())
    } else {
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    }
});



