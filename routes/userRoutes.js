const express=require('express');
const router=express.Router();
const {registerUser,loginUser,profile}=require('../controllers/userController.js');
const authenticateUser=require('../middlewares/auth.js');
router.post('/profile',authenticateUser,profile);
router.post('/registerUser',registerUser);
router.post('/loginUser',loginUser);

module.exports=router;
