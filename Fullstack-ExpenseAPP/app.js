const express=require('express');

const sequelize=require('./util/database');

const cors=require('cors');

const expenseRoutes=require('./routes/expenseRoutes');

const bodyParser=require('body-parser');

const app=express();

app.use(cors());

app.use(bodyParser.json());

app.use(expenseRoutes);

sequelize.sync().then().catch(err=>console.log(err));

app.listen(3000,()=>{
    console.log("Server listening listening on PORT 3000");
});