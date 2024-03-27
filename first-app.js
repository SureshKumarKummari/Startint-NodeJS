const http=require('http');

const server=http.createServer((req,res)=>{
    res.write("Hello This is Suresh!");
    res.end();
})

server.listen(4000,console.log("listening at 4000"));