
const express=require('express');

const router=express.Router();

router.get('/admin',(req,res,next)=>{
res.send('<form action="/shop" method="POST">Name of Product : <input type="text" name="title"><br><br>Size <input type="number" name="size"><br><br><button type="submit">Submit</submit></form>');
});



module.exports=router;