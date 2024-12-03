var jwt = require('jsonwebtoken');


const encrypt=async(id)=>{
    jwt.sign({
       User_id:id
    }, 'shreya');
    return encrypt;
} 


const decrypt=async(token)=>{
    var decoded = jwt.verify(token, 'shreya');
    return decoded;
}


module.exports={encrypt,decrypt};