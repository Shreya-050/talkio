const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        require:true
    },
    Gender:{
        type:String
    },
    Phone:{
        type:Number
    }
})
const Users = mongoose.model('Users', userSchema);
module.exports=Users;
