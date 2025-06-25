import React, { useState,useEffect } from 'react';
import { Heart, Star } from 'lucide-react';
import { products } from '../product';
import { Link } from 'react-router'
import ScrollToTop from './ScrollToTop'
import ReactPaginate from 'react-paginate';
// import Pagination from './Pagination';

function ProductCard({ product}) {
  const [heart, setHeart] = useState('white');
  const fillheart = () => {
    setHeart(!heart);
  }
  

  return (
    <>
    <section data-aos="fade-up" data-aos-duration="1500">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 ease-in-out hover:scale-105">
        <div className="relative p-4">
          <Link to={`/product/${product.id}`} className='cursor-pointer'><img
            src={product.image_url[1]}
            alt={product.name}
            className="w-full h-48 object-contain scale-120"
          /></Link>
          <button onClick={fillheart} className={`cursor-pointer absolute top-3 right-3 p-1.5 bg-white rounded-full hover:bg-red-50 transition-colors`}>

            {heart ?
              '🤍'
              :
              '❤️'

            }
          </button>
        </div>

        <div className="p-5">
          <Link to={`/product/${product.id}`} className='cursor-pointer'>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-3">{product.description.slice(0, 60)}...</p>

            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
              </div>
              <span className="mx-2 text-gray-300">•</span>
              <span className="text-sm text-gray-600">In Stock</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900">${product.price}</span>
            </div>
          </Link>
        </div>



      </div>
      </section>      
      {/* pagination */}

    </>
  );
}

export default function App({items}) {
  // const [selectedCategory,setSelectedCategory]=useState();
  const [currentItems,setCurrentItems]=useState(items);
  const [pageCount,setPageCount]=useState(0);
  const [itemOffset,setItemOffset]=useState(0);
  const itemsPerPage=12;
  
  useEffect(()=>{
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount (Math.ceil(items.length / itemsPerPage));
  },[itemOffset,itemsPerPage,items])
  
  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length; 
    setItemOffset(newOffset);
  }; 
  
  
      // const p=currentItems.filter(product=>product.category);
  return (
    <>
      <div className="min-h-screen mb-3 bg-gray-100 py-12 px-3 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="animate text-3xl font-bold text-gray-900 mb-8 text-center">Featured Products</h1>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 md:gap-3.5">
            {currentItems.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      {/* pagination */}
      <div data-aos="fade" data-aos-duration="1000">
      <ReactPaginate
        breakLabel="..."        
        nextLabel="Next >"
        previousLabel="< Previous"      
        onPageChange={handlePageClick}
        pageRangeDisplayed={itemsPerPage}
        pageCount={pageCount}
        renderOnZeroPageCount={null}                
        containerClassName='pagination flex justify-center items-center gap-[5px] my-4 text-[1.2rem] '
        pageLinkClassName='page-num font-[400] m-1 py-1 px-2 cursor-pointer rounded-[3px] hover:bg-[#222] hover:text-[#fff]'
        previousLinkClassName='page-num p-2 bg-[#222] text-white cursor-pointer bg-[#222] rounded-md '
        nextLinkClassName='page-num p-2 bg-[#222] text-white cursor-pointer bg-[#222] rounded-md '
        activeLinkClassName='cursor-pointer active:bg-[#222]'
      />
      </div>
    </>
  );
}


