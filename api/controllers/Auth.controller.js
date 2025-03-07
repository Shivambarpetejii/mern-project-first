import User from "../models/User.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/Error.js";
import jwt from 'jsonwebtoken'

//sing up bacakend loginc
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

export const singin = async (req,res,next)=>{

  const {email,password} = req.body;

  try {
    const validUser = await User.findOne({email})
    if(!validUser) return next(errorHandler(404,'USER NOT FOUND!'))
      const validPassword = bcryptjs.compareSync(password, validUser.password);
    if(!validPassword) return next(errorHandler(401,'Invalid Password!!'))
    const token = jwt.sign({id:validUser.id},process.env.JWT_SECRET);
    const {password : pass , ...rest} = validUser._doc;
    res
    .cookie('access_token',token,{httpOnly : true })
    .status(200)
    .json(rest);
  } catch (error) {
    next(error);
  }
};


export const google = async(req,res,next)=>{
  try {
    const user = await User.findOne({email : req.body.email})
    
    if(user)
    {
      const token = jwt.sign({id : user._id},process.env.JWT_SECRET);
      const {password:pass,createdAt:ctt,...rest} = user._doc;
      res
        .cookie('access_token',token,{httpOnly : true} )
        .status(200)
        .json(rest);

    }
    else
    {
      const genreatedPasswrod = Math.random().toString(36).slice(-8)+Math.random().toString(36).slice(-8)
       const hashedPassword = bcryptjs.hashSync(genreatedPasswrod,20)

       const newUser = new User({username:req.body.name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-4),email:req.body.email, password : hashedPassword, avater : req.body.photo})
       await newUser.save();
       const token = jwt.sign({id:newUser._id},process.env.JWT_SECRET)
       const {password:pass,...rest} = newUser._doc;
       res
        .cookie('access_token',token,{httpOnly:true})
        .status(200)
        .json(rest)

    }
  } catch (error) {
    next(error)
  }
}


