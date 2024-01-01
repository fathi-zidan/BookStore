import React from 'react'
import { IoMenu } from "react-icons/io5";

function Header() {
  return (
    <section className='flex items-start justify-between h-[50px] w-full bg-white shadow-lg'>
        <div className='font-bold text-black mt-2 '>
        <IoMenu/>
        </div>
        <div className='flex items-center justify-between gap-2'>
            <p className='text-black font-semibold font'>hello sally</p>
            <img className='w-[25px] h-[25px] border-none rounded-lg mt-1 ' src="https://github.com/cristianmihai01/real-estate-starter/blob/main/src/assets/img/agents/agent1.png?raw=true" alt="photo" />

        </div>
    </section>
  )
}

export default Header
