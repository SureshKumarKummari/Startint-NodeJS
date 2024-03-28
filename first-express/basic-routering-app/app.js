const express=require('express');
const bodyParser=require('body-parser');
const app=express();

const admin=require('./routes/admin');
const shop=require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));


app.use(admin);
app.use(shop);
app.use((req,res,next)=>{
    res.send('<h1>Page Not Found</h1>');
});

app.listen(3000);