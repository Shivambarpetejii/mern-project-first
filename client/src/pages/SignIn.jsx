import React, { useState } from 'react'
import {Link , useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signInStart,signInSuccess,singInfailure } from '../redux/user/UserSlice';
import OAuth from '../components/OAuth';

export default function SignIn() {

  const naviget = useNavigate();
  
  const [formData,setformData] = useState({});
 const {loding, error} = useSelector((state)=> state.user);
  const dispatch = useDispatch();

  function handleChange(e){

    setformData(
      {...formData,
       [e.target.id] : e.target.value
      }
    );
  }
 
  const handelSubmit = async (e)=>{
    
    e.preventDefault();
    try {
      dispatch(signInStart()); 
    const res = await fetch('/api/auth/singIn' ,{
      method:'POST',
      headers:{
       'Content-Type':'application/json'
      },
      body:JSON.stringify(formData),
   });
   const data = await res.json();
   console.log(data);

   if(data.success === false)
   {
    dispatch(singInfailure(data.message));
     return;
   }
    else{
     dispatch(signInSuccess(data));
      naviget('/')
    }

      
    } catch (error) {
      dispatch(singInfailure(error.message));
  
      
    }

    
  }
  

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sing-In</h1>
      <form onSubmit={handelSubmit} className='flex flex-col gap-3'>
        
        <input type='email' placeholder='email' id='email' className='border p-3 rounded-xl'onChange={handleChange}/>
        <input type='password' placeholder='password' id='password' className='border p-3 rounded-xl'onChange={handleChange}/>
        <button disabled={loding} className='uppercase bg-slate-700 p-3 rounded-lg text-white hover:opacity-95 isabled:opacity-75' >{loding ? 'Loding....' :'Sing In' }</button>
        <OAuth></OAuth>
      </form>
      <div className='flex gap-3 my-3'>
        <p>Dont Have an account?</p>
        <Link to={'/sign-up'}>
            <span className='text-blue-500'>Sing-Up</span>
        </Link>
      </div>
      {error && <p className='text-red-600'>{error}</p>}
    </div>
  )
}
