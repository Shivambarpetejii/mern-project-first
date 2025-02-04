import React, { useState } from 'react'
import {Link , useNavigate} from 'react-router-dom'

export default function SignUp() {

  const naviget = useNavigate();
  
  const [formData,setformData] = useState({});
  const [error, setError] = useState(null);
  const [loding,setLoding]=useState(false);

  function handleChange(e){

    setformData(
      {...formData,
       [e.target.id] : e.target.value
      }
    );
  }
 
  const handelSubmit = async (e)=>{
    setLoding(true);
    e.preventDefault();
    try {
      
    const res = await fetch('/api/auth/singUp' ,{
      method:'POST',
      headers:{
       'Content-Type':'application/json'
      },
      body:JSON.stringify(formData),
   });
   const data = await res.json();

   if(data.success === false)
   {
     setLoding(false);
     setError(data.message);
   }
     setLoding(false);
     setError(null)
     naviget('/sign-in')

   console.log(data);
      
    } catch (error) {
      setLoding(false);
      setError(error.message);
      
    }

    
  }
  

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sing-Up</h1>
      <form onSubmit={handelSubmit} className='flex flex-col gap-3'>
        <input type='text' placeholder='UserName' id='username' className='border p-3 rounded-xl'onChange={handleChange}/>
        <input type='email' placeholder='email' id='email' className='border p-3 rounded-xl'onChange={handleChange}/>
        <input type='password' placeholder='password' id='password' className='border p-3 rounded-xl'onChange={handleChange}/>
        <button disabled={loding} className='uppercase bg-slate-700 p-3 rounded-lg text-white hover:opacity-95 isabled:opacity-75' >{loding ? 'Loding....' :'Sing Up' }</button>
      </form>
      <div className='flex gap-3 my-3'>
        <p>Have an account?</p>
        <Link to={'/sign-in'}>
            <span className='text-blue-500'>Sing-In</span>
        </Link>
      </div>
      {error && <p className='text-red-600'>{error}</p>}
    </div>
  )
}
