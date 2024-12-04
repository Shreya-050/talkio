const express=require('express');
const router=express.Router();
const {registerUser,loginUser,profile,logout}=require('../controllers/userController.js');
const authenticateUser=require('../middlewares/auth.js');
router.get('/profile',authenticateUser,profile);
router.post('/registerUser',registerUser);
router.post('/loginUser',loginUser);
router.post('/logout',authenticateUser,logout);
module.exports=router;
