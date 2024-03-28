const express=require('express');
const bodyparser=require('body-parser');
const login=require('./routes/login');
const chat=require('./routes/chat');
const path = require('path');
let app=express();


app.use(bodyparser.urlencoded({extended : false}));

app.use(login);

app.use(chat);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})

app.listen(3000);