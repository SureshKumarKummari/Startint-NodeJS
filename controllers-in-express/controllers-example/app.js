const express=require('express');
const bodyparser=require('body-parser');
const admin=require('./routes/admin');
const shop=require('./routes/shop');
const path = require('path');
const rootDir=require('./util/path');
const Controlling=require('./controllers/404');
let app=express();


app.use(bodyparser.urlencoded({extended : false}));

app.use(express.static(path.join(__dirname,'public')));

app.use(admin);

app.use(shop);

// app.use((req,res,next)=>{
//     res.status(404).sendFile(path.join(rootDir,'views','404.html'));
// })
app.use(Controlling.invalidurl);

app.listen(3000);