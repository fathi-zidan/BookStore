import React from 'react'
import { FaSearch } from "react-icons/fa";
import { CgPlayListSearch } from "react-icons/cg";

function Search() {
  return (
    <div className='flex flex-col items-center justify-center gap-y-3 mt-4'>
        <div>
            <h3 className='font-semibold text-gray-600'>
                you don't rise to the level of your goals,you<br></br> fall to the level of your system.
            </h3>
        </div>
        <div className=' flex items-center justify-between w-[450px] h-[50px]  border-black rounded-lg shadow-lg '>
            <FaSearch className='text-gray-500 ml-1' />
            <h5 className='text-gray-400'>Search by title, Author, Genre</h5>
            <CgPlayListSearch className='mr-1 size-5' />



        </div>
      
    </div>
  )
}

export default Search
