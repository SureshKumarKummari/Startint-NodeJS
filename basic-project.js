const http = require('http');
const fs = require('fs');
const readline = require('readline');

const server = http.createServer((req, res) => {
    let url = req.url;
    if (url === '/') {
        const filePath = 'message.txt'; 
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
            const htmlResponse = '<html><head><title>First-Redirection</title></head><body><form action="/message" method="POST"><p>' + lastLine + '</p><input type="text" name="text"></input><br><button type=submit>Submit</button></form></body></html>';
            res.write(htmlResponse);
            return res.end();
        });
    } else if (url === '/message' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const newMessage = decodeURIComponent(body).split('=')[1];
            fs.appendFileSync('message.txt', newMessage + '\n');
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
});

server.listen(4000, () => {
    console.log("Listening at 4000");
});

