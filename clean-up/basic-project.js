const http = require('http');
const requests=require('./routes');

const server = http.createServer(requests);

server.listen(4000, () => {
    console.log("Listening at 4000");
});

