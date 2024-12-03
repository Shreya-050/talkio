require('dotenv').config()

const express=require('express');
const app=express();
const port=process.env.PORT || 4000;
const connectDB=require('./database/db_conn.js');
const cookieParser=require('cookie-parser');
const userRoutes=require('./routes/userRoutes.js');

const cors=require('cors');



app.use(cookieParser());
app.use(cors());
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({limit:"16kb",extended:true}))
app.use('/app',userRoutes);



connectDB();























app.listen(port,()=>{
    console.log(`the app is running on the port is ${port}`)
});