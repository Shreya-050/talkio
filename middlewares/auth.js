const {decrypt}=require('../utils/tokenGeneration.js');

const authenticateUser=(req,res,next)=>{
const token=req.cookies?.accesstoken;
console.log(token);
if(!token){
    return res.status(404)
    .json({
        message:"Token is missing",
        Success:false
    })
}
const decryptToken=decrypt(token);
req.userId=decryptToken.User_id;
next();
}
module.exports=authenticateUser;