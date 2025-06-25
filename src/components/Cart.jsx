import React, { useState } from 'react'
import { Heart ,Plus } from 'lucide-react';



function Cart({popularItems}) {
  const min=0;
  const max=10;
  const [quantity,setQuantity]=useState(0);

  const increment=()=>{
    if (quantity<max) {
      setQuantity(quantity+1);      
    }
  }

  const decrement=()=>{
    if (quantity>min) {
      setQuantity(quantity-1);      
    }
  }

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      if (value < MIN_VALUE) {
        setQuantity(MIN_VALUE);
      } else if (value > MAX_VALUE) {
        setQuantity(MAX_VALUE);
      } else {
        setQuantity(value);
      }
    } else {
      setQuantity(MIN_VALUE);
    }
  };

  return (
    <div>
      
  <div className="mx-auto my-8 max-w-screen-xl text-black px-4 2xl:px-0">
    <p data-aos="fade-up" data-aos-duration="1500" className="text-4xl mx-3 text-center font-bold text-gray-900">Shopping Cart</p>

    <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
      <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
        <div className="space-y-6">
          {popularItems.map((item)=>(
             <div data-aos="fade-up" data-aos-duration="1500" className="rounded-lg border border-gray-200 p-4 shadow-md dark:border-gray-200 md:p-6">
             <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
              <img src={item.image_url[1]} width={120} alt="item" />
 
               <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
               <div className="flex items-center justify-between md:order-3 md:justify-end">
                 <div className="flex items-center">
                   <button type="button" id="decrement-button" onClick={decrement} data-input-counter-decrement="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600  dark:focus:ring-gray-700">
                     <svg className="h-2.5 w-2.5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                     </svg>
                   </button>
                   <input type="text" id="counter-input" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 " placeholder="" value={quantity}  onChange={handleInputChange} required />

                   <button type="button" id="increment-button" onClick={increment}  data-input-counter-increment="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:focus:ring-gray-700">
                     <svg className="h-2.5 w-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                     </svg>
                   </button>
                 </div>
                 <div className="text-end md:order-4 md:w-32">
                   <p className="text-xl font-bold text-gray-900 ">${item.price}</p>
                 </div>
               </div>
 
               <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                 <p className="text-xl font-medium text-gray-900 ">{item.name}</p>
 
                 <div className="flex items-center gap-4">
                   <button type="button" className="inline-flex items-center text-sm cursor-pointer font-medium hover:text-gray-900 ">
                     <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                     </svg>
                     Add to Favorites
                   </button>
 
                   <button type="button" className="flex items-baseline text-sm font-medium cursor-pointer text-red-600  dark:text-red-500">
                     <p className='text-xl'>&#215;</p>
                     <p>Remove</p>
                   </button>
                 </div>
               </div>
             </div>
           </div>
          ))}
         
         
        </div>
       
      </div>

      <div data-aos="fade-up" data-aos-duration="1500" className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
        <div className="space-y-4 rounded-lg border border-gray-200 p-4 shadow-sm dark:border-gray-700 sm:p-6">
          <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

          <div className="space-y-4">
            <div className="space-y-2">
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 ">Original price</dt>
                <dd className="text-base font-medium text-gray-900 ">$7,592.00</dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 ">Savings</dt>
                <dd className="text-base font-medium">-$299.00</dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 ">Store Pickup</dt>
                <dd className="text-base font-medium text-gray-900 ">$99</dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 ">Tax</dt>
                <dd className="text-base font-medium text-gray-900 ">$799</dd>
              </dl>
            </div>

            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
              <dt className="text-base font-bold text-gray-900 ">Total</dt>
              <dd className="text-base font-bold text-gray-900 ">$8,191.00</dd>
            </dl>
          </div>

          <a href="#" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed to Checkout</a>

          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
            <a href="#" title="" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
              Continue Shopping
              <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </a>
          </div>
        </div>

        <div className="space-y-4 rounded-lg border border-gray-200 p-4 shadow-sm dark:border-gray-700 sm:p-6">
          <form className="space-y-4">
            <div>
              <label htmlFor="voucher" className="mb-2 block text-sm font-medium text-gray-900 "> Do you have a voucher or gift card? </label>
              <input type="text" id="voucher" className="block w-full rounded-lg border border-gray-300  p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600   dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="" required />
            </div>
            <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Apply Code</button>
          </form>
        </div>
      </div>
    </div>
  </div>

    </div>
  )
}

export default Cart
