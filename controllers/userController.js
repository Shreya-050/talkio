const Users=require('../models/user_model.js');
const {hashPass,comparePassword}=require('../utils/hashing.js');
const {encrypt}=require('../utils/tokenGeneration.js');

//Register
const registerUser=async(req,res)=>{
    const {nam,email,password,gender,phone}=req.body;
   
    if(!nam||!email||!password){
       return res.status(404)
        .json({
            message:"Credentials not found",
            Success:false
        })
    }
    try {
        const searchUser= await Users.findOne({Email:email});
        
        if(searchUser){
           return res.status(409)
            .json({
                message:"User already exist",
                Success:false
            })
        }

        const hashPassword=await hashPass(password);
        const createUser= await Users.create({Name:nam,Email:email,Password:hashPassword,Gender:gender,Phone:phone});
        if(!createUser){
          return  res.status(500)
            .json({
                message:"Server error",
                Success:false
            })
        }
        return res.status(201)
        .json({
            message:"User created Successfully",
            Success:true
        })
    } catch (error) {
        console.log(error.message);
    }
   
}

//Login
const loginUser=async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(404)
        .json({
            message:"Credential not found",
            Success:false

        })
    }
    try {
        const checkUser=await Users.findOne({Email:email});
        if(!checkUser){
         return res.status(404)
         .json({
             message:"User not found",
             Success:true
         })
        }
        const checkPass=await comparePassword(password,checkUser.Password);
        if(!checkPass){
         return res.status(403)
         .json({
             message:"Incorrect Password",
             Success:false
         })
        }
        const token=await encrypt(checkUser._id);
        const options={
         httpOnly:true,
         secure:true
        }
        return res.status(200)
        .cookie('accesstoken',token,options)
        .json({
         message:"Logged in Successfully",
         Success:true
        }) 
    } catch (error) {
        console.log(error.message);
    }
        
    }
    //Profile
    
    const profile=async(req,res)=>{
        const id=req.userId;
        console.log(id);
        if(!id){
            return res.status(404)
            .json({
                message:"Id not found",
                success:false
            })
        }
        try {
           const userDetails=await Users.findById(id).select('-Password');
           if(!userDetails){
                return res.status(404)
                .json({
                    message:"Details are not found",
                    Success:false
                })
           }
          return res.status(200)
           .json({
               message:"Details fetched Successfully",
               Data:userDetails,
               Success:false
           })
        } catch (error) {
            console.log(error.message);
        }

    }

module.exports={registerUser,loginUser,profile}