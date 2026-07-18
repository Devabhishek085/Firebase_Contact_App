import React from 'react'
import Navbar from './components/Navbar'
import { FaSearch } from "react-icons/fa";

const App = () => {
  return (
    <div className='mx-w-[370px] mx-auto'>
      <Navbar/>
      <div className='flex relative items-center'>
        <FaSearch className='text-white text-3xl absolute ml-1'/>
        <input type="text"  className='h-10 flex-grow rounded-md border border-white bg-transparent text-white pl-9'/>
        
      </div>
    </div>
  )
}

export default App