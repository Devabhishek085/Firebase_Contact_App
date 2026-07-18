import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { FaSearch } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";

const App = () => {

  const [contacts, setcontacts] = useState([])

  useEffect(()=>{
    
  },[])





  return (
    <div className='mx-w-[370px] mx-auto'>
      <Navbar/>
      <div className='flex gap-2'>
              <div className='flex relative items-center flex-grow '>

        <FaSearch className='text-white text-3xl absolute ml-1'/>

        <input type="text"  className='h-10 flex-grow rounded-md border border-white bg-transparent text-white pl-9'/>
      </div>

     
        <FaCirclePlus className='text-5xl text-white cursor-pointer'/>
    
      </div>
    </div>
  )
}

export default App