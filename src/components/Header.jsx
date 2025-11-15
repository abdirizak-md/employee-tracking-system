import React from 'react'
import { IoNotificationsSharp } from "react-icons/io5";

function Header() {
  return (
    <div className='bg-gray-100 flex justify-around items-center p-1'>
      <div className='text-5xl font-extrabold'>ETS</div>
      <div className='flex justify-around items-center'>
        <IoNotificationsSharp size={24} className='mr-3'/>
        <img src="./src/assets/pexels-photo.webp" alt="profile" className='w-8 h-8 mx-1 rounded-full'/>
        <p className='font-bold text-sm mx-1'>Rizeh moha</p>
      </div>
    </div>
  )
}

export default Header
