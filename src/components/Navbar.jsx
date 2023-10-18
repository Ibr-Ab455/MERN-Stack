import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-[#0D698B]'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            {/* logo */}
             <Link to="/">
             <h1 className='font-bold text-[#F2F1E8] text-2xl'>Ibrahim</h1>
             </Link>
         
            {/* list */}
            <ul className='flex gap-4'>
             <Link to="/">
             <li className='text-[#F2F1E8] text-[18px]'>Home</li>
             </Link>
            
             <Link to="/about">
             <li  className='text-[#F2F1E8] text-[18px]'>About</li>
             </Link>

             <Link to="/login">
             <li  className='text-[#F2F1E8] text-[18px]'>LogIn</li>
             </Link>
            
            
            </ul>
        </div>
    </div>
  )
}

export default Navbar