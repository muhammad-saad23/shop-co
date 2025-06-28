import React, { useState,useEffect } from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa6";
import { BiSearch } from 'react-icons/bi';
import ResponsiveNav from './ResponsiveNav';
import SearchBar from './SearchBar';
import { products } from '../product';
import { Link } from 'react-router';


function Navbar({setData}) {
  const filterByCategory=(category)=>{
    const items=products.filter((product)=>product.category===category);
    setData(items);
    // console.log(items)
  }
  const nav=[
    // {id:1,title:"Home",link:'/'},
    {id:2,title:"men",link:'/men',value:'Men'},
    {id:3,title:"women",link:'/women',value:'women'},
    {id:4,title:"kids",link:'/kid',value:'kid'},
    // {id:5,title:"contact",link:'contact/'},  
  ]
 const [Nav,setNav] =useState(false);
 const [Search,setSearch]=useState(false);
//  const [close,setClose]=useState(false)
  // const filter=nav.filter(nav=>nav.link); 


  const handleOpenNav=()=>{
    setNav(true);
  }
  const handleCloseNav=()=>{
    setNav(false);

  }

 const handleOpenSearch = () => {
  setSearch(true);
  }

 const handleCloseSearch=()=>{
  setSearch(false)
  // console.log(close);
  
 }

  return (
    <div className='sticky top-[0px] z-1 bg-white'>
      <>
        <nav className='flex flex-row justify-around items-baseline my-2 py-2 animate'>            
          <div className="logo cursor-pointer">
          <Link to="/">
          <span className='text-4xl tracking-wider md:text-5xl' id='logo'>ZyraWear</span>
          </Link>  
          </div>
          <div className={`hidden links md:flex flex-row items-center`}>
            <ul className='navbar capitalize relative lg:flex md:hidden'>
              <li><Link to={'/'} className='mx-3'>home</Link></li>
              {nav.map(item=>(
                <li key={item.id}><Link value={item.value} onClick={(e)=>filterByCategory(item.value)} to={`/card${item.link}`} className='mx-3 '>{item.title}</Link></li>
              ))}              
              <li><Link to={'/contact'} className='mx-3 '>contact</Link></li>
            </ul>
            <div className="search flex items-center mx-5">
              <BiSearch className='cursor-pointer text-xl'/>
              <input type="search" className='px-2 pr-6 border-0 outline-0 bg-transparent' placeholder='Search...'/>
            </div>
          </div>
          <div className="icons flex md:flex items-baseline">          
            <button type="button" className='relative lg:hidden' onClick={handleOpenSearch}>
              {Search ? 
                <BiSearch className='mx-1.5 md:mx-3 cursor-pointer text-2xl'/>
                :
                <BiSearch className='mx-1.5 md:mx-3 cursor-pointer text-2xl'/>

              }            
            </button>
           <Link to={`/cart`}><MdOutlineShoppingCart className='mx-1.5 md:mx-3 cursor-pointer text-2xl'/></Link>
           <Link to={`signup/`}><RiAccountCircleLine className='mx-1.5 md:mx-3 cursor-pointer text-2xl'/></Link>
            <button type="button" onClick={handleOpenNav}
             className='relative text-2xl block lg:hidden'>
              {Nav?                
                <FaBars className='md:mx-3 cursor-pointer text-2xl'/>
                :
                <FaBars/>

              }
            </button>
          </div>
        </nav>
         <ResponsiveNav filterByCategory={filterByCategory} links={nav} Nav={Nav} closeNav={handleCloseNav}/>
         <SearchBar Search={Search} onClose={handleCloseSearch}/>
         {/* <Card choice={filter}/> */}
      </>
    </div>
  )
}

export default Navbar;


 