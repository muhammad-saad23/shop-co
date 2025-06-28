import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router';

function ResponsiveNav({ Nav, closeNav, links,filterByCategory }) {
  const [cross, setCross] = useState(Nav)

  const CloseNav = () => {
    setCross(false);
    closeNav();
  }

  return (
    <div className='flex flex-row-reverse'>
      <>
        <AnimatePresence mode='wait'>
          {
            Nav && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 10, x: 0 }}
                exit={{ opacity: 0, x: 100 }}

                className={`bg-[#fff] shadow-black shadow-2xl absolute top-0 w-70 h-screen
                 z-20 lg:hidden`}
              >
                <div className="cross flex flex-row-reverse relative top-5 right-5">
                  <button type='button' onClick={CloseNav}>
                    <RxCross1 className='text-[1.7em] ' />
                  </button>
                </div>

                <div className='relative top-7 flex flex-col justify-center items-start pl-4 lg:hidden'>
                  <ul className='capitalize flex flex-col gap-3 text-xl font-semibold py-6'>
                    <li><Link to={'/'} className='mx-3'>home</Link></li>
                    {links.map(item => (
                      <li key={item.id}><Link value={item.value} onClick={(e) => filterByCategory(item.value)} to={`/card${item.link}`} className='mx-3 '>{item.title}</Link></li>
                    ))}
                    <li><Link to={'/contact'} className='mx-3 '>contact</Link></li>
                  </ul>

                </div>
              </motion.div>
            )
          }
        </AnimatePresence>
      </>
    </div>
  )
}

export default ResponsiveNav
