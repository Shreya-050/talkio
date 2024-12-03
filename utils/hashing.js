const bcrypt = require('bcrypt');
const hashPass=async(password)=>{
     const salt=10;
    const newPass=await bcrypt.hash(password, salt);
    return newPass;
}

const comparePassword=async(password,dbPassword)=>{
    const passStatus=bcrypt.compare(password,dbPassword);
    return passStatus;
}
module.exports={hashPass,comparePassword};












module.exports={hashPass,comparePassword};