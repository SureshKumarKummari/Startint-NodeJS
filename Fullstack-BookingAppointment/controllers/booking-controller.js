const User=require('../models/user');

exports.addProduct=(req,res,next)=>{
    console.log(req.body);
    const uname=req.body.username;
    const phone=req.body.phone;
    const email=req.body.email;
    User.create({
        username:uname,
        phone:phone,
        email:email
    }).then((response)=>{
      //console.log(response.dataValues);
        res.send(response.dataValues);
    }).catch((err)=>{
        console.log(err);
    });
}


exports.getProducts=(req,res,next)=>{
  console.log("get products called");
 User.findAll().then((user)=>{
    const data=user.map(i=>i.dataValues); 
    console.log(data);
     res.send(data);
  }).catch((err)=>{
    console.log(err);
  });
}


exports.deleteProduct=(req,res,next)=>{
    const id = req.params.id;
  User.findByPk(id).then((user)=>{
    return user.destroy();
  }).then(()=>{
    console.log("Deleted!");
    res.send(200);
  }).catch((err)=>{
    console.log(err);
  });
}
