const express=require('express');

let app=express();

app.use((req,res,next)=>{
    console.log("Fist Middleware function!");
    next();
})

app.use((req,res,next)=>{
    console.log("Second Middleware function!");
    res.send('<h1>This is Middleware</h1>');
})

app.listen(3000);