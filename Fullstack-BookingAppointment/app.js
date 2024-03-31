const express=require('express');

const sequelize=require('./util/database');


const bookingRoutes=require('./routes/bookingRoutes');

const bodyParser=require('body-parser');

const cors=require('cors');

const app=express();

app.use(cors());

app.use(bodyParser.json());


app.use(bookingRoutes);

app.use('/',(req,res,next)=>{
    res.send("Hello");
})

sequelize.sync().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});


app.listen(3000,function(){
    console.log("Server is listening on PORT 3000")
});

