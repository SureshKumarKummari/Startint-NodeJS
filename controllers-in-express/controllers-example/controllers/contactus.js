 const path=require('path');
 const p=require('../util/path');
 
 exports.contactPage=(req,res,next)=>{
    res.sendFile(path.join(p,'views','contactus.html'));
}

exports.successPage=(req,res,next)=>{
    res.sendFile(path.join(p,'views','success.html'));
}