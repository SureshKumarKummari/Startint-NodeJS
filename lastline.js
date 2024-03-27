/*const readline = require('readline');
const fs = require('fs');

const filePath = 'message.txt'; 
function extract(){
    const rl = readline.createInterface({
        input: fs.createReadStream(filePath),
        crlfDelay: Infinity
    });

    let lastLine = '';
    rl.on('line', line => {
        lastLine = line;
    });
    console.log(lastLine);
};

extract();*/


const readline = require('readline');
const fs = require('fs');

const filePath = 'message.txt'; 

function extract() {
    const rl = readline.createInterface({
        input: fs.createReadStream(filePath),
        crlfDelay: Infinity
    });

    let lastLine = '';
    
    rl.on('line', line => {
        lastLine = line;
    });

    rl.on('close', () => {
        console.log(lastLine);
    });
}

extract();
