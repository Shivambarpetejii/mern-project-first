import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routs/User.route.js';
import authroute from './routs/Auth.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Conected MongoDB!");
    
}).catch((err)=>
{
    console.log(err);
    
})

 const app = express();

app.use(express.json());

 app.listen(3000, ()=>{
    console.log('server is runing on port no 3000!!');
 });

 app.use('/api/demo',userRoute);
 app.use('/api/auth',authroute);
 

 app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    return res.status(statusCode).json(
        {
            success : false,
            statusCode,
            message
        }
    )

 })
    

