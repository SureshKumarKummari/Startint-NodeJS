const express=require('express');
const fs= require('fs');
const path=require('path');
const router=express.Router();



router.post('/chat',(req,res,next)=>{
    const { data } = req.body;
    let file1=path.join(__dirname,'..','message.txt');
    fs.appendFile(file1, `${data}\n`, err => {
        if (err) {
            console.error('Error writing to file:', err);
            res.status(500).send('Error writing to file');
        } else {
            console.log('Message written to file successfully');
            res.status(200).send('Message written to file successfully');
        }
    });
    res.redirect('/chat');
   
});

router.use('/chat',(req,res,next)=>{
    let messge=fs.readFileSync(path.join(__dirname,'..','message.txt'));
res.send('<html lang="en"><body><p>'+messge+'</p><form action="/chat" method="POST"><input type="text" name="chat"><button type="submit">Send</button></form></body></html>');
});

module.exports=router;