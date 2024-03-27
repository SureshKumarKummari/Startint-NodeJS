const http=require('http');

const server=http.createServer((req,res)=>{
    res.write("Hello This is Suresh!");
    res.end();
})

server.listen(5000,console.log("listening at 5000"));