import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import { motion,AnimatePresence } from 'framer-motion'


function Search({Search,onClose}) {
  const [cancel,setCancel]=useState(Search);

  const CloseSearch=()=>{
    setCancel(false);
    onClose();
  }

  return (
    <div>
      <>
      <AnimatePresence mode='wait'>
            {
                Search && 
                (
                  <motion.div  initial={{opacity:0,x:100}}
                  animate={{opacity:10,x:0}}
                  exit={{opacity:0,x:100}}  
                
                className='absolute top-0 z-10 bg-[#fff] flex justify-center shadow-black shadow-2xl w-screen items-start h-screen
                lg:hidden'
                >
                  <div className="flex my-4 py-3 lg:hidden">
                    <div className="search flex justify-around items-center mx-5">
                        <BiSearch className='cursor-pointer text-xl'/>
                        <input type="search" className='px-2 pr-6 border-0 outline-0 bg-white' placeholder='Search...'/>
                    </div>                                                      
                    <div className="cancel">
                      <button type='button' className='cursor-pointer rounded-3xl px-5 py-2 text-md bg-black text-white border-0 outline-0' onClick={CloseSearch}>Cancel</button>
                    </div>  
                  </div>
                </motion.div>
                 

                
                )
            }
      </AnimatePresence>
      </>
    </div>
  )
}

export default Search
