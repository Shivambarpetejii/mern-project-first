// this import for iconns and need to install npm install react-icons 
import { FaSearch } from "react-icons/fa";
// this is for react 
import React from 'react'
// this is for link replace to ancer tag in react 
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className='bg-slate-300 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
      <Link to={'/'}>
      <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-slate-500'>YOUR</span>
        <span className='text-slate-700'>SHEVK</span>
      </h1>
      </Link>
      <form className='bg-slate-100 p-2 rounded-lg flex items-center'>
        <input type='text' placeholder='Search. . . . . .' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
        <FaSearch className="text-slate-700"/>
      
      </form>
      <ul className="flex gap-4">
      <Link to={'/'}>
        <li className="hidden sm:inline text-slate-700 hover:underline">HOME</li>
     </Link>
      <Link to={'/about'}>
        <li className="hidden sm:inline text-slate-700 hover:underline">ABOUT</li>
        </Link>
        <Link to={'/sign-in'}>
        <li className=" text-slate-700 hover:underline">SIGN-IN</li>
        </Link>
      </ul>
      </div>
    </header>
  )
}
