import React from 'react'
import {Link} from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sing-Up</h1>
      <form className='flex flex-col gap-3'>
        <input type='text' placeholder='UserName' id='username' className='border p-3 rounded-xl'/>
        <input type='email' placeholder='email' id='email' className='border p-3 rounded-xl'/>
        <input type='password' placeholder='password' id='password' className='border p-3 rounded-xl'/>
        <button  className='uppercase bg-slate-700 p-3 rounded-lg text-white hover:opacity-95 disabled:opacity-75'>sing Up</button>
      </form>
      <div className='flex gap-3 my-3'>
        <p>Have an account?</p>
        <Link>
            <span className='text-blue-500'>Sing-In</span>
        </Link>
      </div>
    </div>
  )
}
