var jwt = require('jsonwebtoken');


const encrypt=(id)=>{
   const encryptData=jwt.sign({
       User_id:id
    }, 'shreya');
    return encryptData;
} 


const decrypt=(token)=>{
    var decoded = jwt.verify(token, 'shreya');
    return decoded;
}


module.exports={encrypt,decrypt};