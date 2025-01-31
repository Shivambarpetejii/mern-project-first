import User from "../models/User.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/Error.js";

export const  userSingUp = async (req,res,next)=>{
 const {username, email, password} = req.body;

const hashedPassword = bcryptjs.hashSync(password,10);
 const newUser = new User({username, email, password: hashedPassword});

 try {
    await newUser.save(); 
    res.status(201).json('user singUp suscessfuly')
 } catch (error) { 
   next(error)
 }
 
};


