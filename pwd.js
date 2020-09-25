// this creates a prompt function
//process.stdout.write('prompt > ');

 process.stdin.on('data', (data) => {
    // why are we trimming?
    // we console logged without trim and it worked
    const cmd = data.toString().trim();

    if (cmd === 'pwd') {
        // console.log('YAYYYY') // this works
        process.stdout.write(process.cwd())
    } else {
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    }
});

module.exports = process.stdout.write(process.cwd())
