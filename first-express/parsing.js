const express=require('express');
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST">Name of Product : <input type="text" name="title"><br><br>Size <input type="number" name="size"><br><br><button type="submit">Submit</submit></form>');
});

app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req,res,next)=>{
    res.send('<h1>Welcome to Expess!</h1>');
})

app.listen(3000);
