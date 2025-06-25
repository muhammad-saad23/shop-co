import React from 'react'
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa";
import { Heart, Star } from 'lucide-react';
import { products } from '../product';
import { Link ,useLocation} from 'react-router'
import { useState,useEffect} from "react";
import Slider from './Slider';

function Home({setData,popularItems}) {
  const FashionImages = [
    { text: "summer season for boys", img: 'https://plus.unsplash.com/premium_photo-1676634832252-097d19f3576a?w=800&&h=800auto=format&fit=crop' },
    { text: "summer season for girls", img: 'https://plus.unsplash.com/premium_photo-1674128398338-f0703164c03a?w=800&h-800&auto=format&fit=crop&' },
  ]

  const categories = [
    { title: "men",link:'/men',value:'Men',img: "https://plus.unsplash.com/premium_photo-1706806943465-68c2a32bd888?w=800&h=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVucyUyMGZhc2hpb258ZW58MHwwfDB8fHww" },
    { title: "women",link:'/women', value:'women',img: "https://plus.unsplash.com/premium_photo-1683817138481-dcdf64a40859?w=800&h=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFzaGlvbnxlbnwwfDB8MHx8fDA%3D" },
    { title: "kids", link:'/kid',value:'kid',img: "https://plus.unsplash.com/premium_photo-1705421623582-590f0252ea51?w=800&h=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5pa2UlMjBraWRzJTIwZmFzaGlvbnxlbnwwfDB8MHx8fDA%3D" },
  ]
  // const [heart, setHeart] = useState('white');
  const location = useLocation();
  

  const filterByCategory=(category)=>{
    const cat=products.filter((product) => product.category === category)
    setData(cat);  
    // console.log(cat);
  }

  

  // useEffect(() => {
  //   const params = new URLSearchParams(location.search);
  //   const category = params.get('category');
  
  //   if (category) {
  //     // Filter products
  //     filterByCategory(category);
  
  //     // Scroll to the category section by its id
  //     const element = document.getElementById(category.toLowerCase());
  //     if (element) {
  //       element.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   } else {
  //     // Reset: show all products and scroll to top
  //     setData(products);
  //     console.log(products)
  //     window.scrollTo(0, 0);
  //   }
  // }, [location, products]);

  return (
    <div>
      <main className="pt-4 sm:pt-8">
        {/* First Hero Section */}
        <section data-aos="fade-up" data-aos-duration="1500" className="relative overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-20">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <span className="inline-block px-3 sm:px-4 py-1 bg-black/5 text-black rounded-full text-sm font-medium">
                  New Collection 2025
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl bebas-neue-regular font-bold text-gray-900 leading-tight">
                  Elevate Your Style With Premium Fashion
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-xl">
                  Discover our handpicked collection of luxury fashion pieces designed
                  to make you stand out. Quality meets elegance in every stitch.
                </p>
                <button className="group cursor-pointer bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium inline-flex items-center hover:bg-gray-900 transition-all text-sm sm:text-base">
                  Shop Now
                  <HiMiniShoppingBag className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* fashion image */}
              <div className="relative mt-8 md:mt-0">
                <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=800&fit=crop"
                    alt="Fashion model showcase"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-black text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl">
                  <p className="text-xs sm:text-sm font-medium">Limited Time Offer</p>
                  <p className="text-xl sm:text-2xl font-bold">30% OFF</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* pic */}
        <h1 data-aos="fade-up" data-aos-duration="1000" className='summer text-[40px] text-center mx-10 -mb-8 mt-10'>New Summer Collections</h1>
        <section data-aos="fade-up" data-aos-duration="1500" className='w-full flex flex-col md:flex-row my-16'>
          {FashionImages.map((src, i) => (
            <div key={i} className="box relative text-white flex justify-start items-center">
              <div className="img">
                <img src={src.img} className='w-2xl h-120 object-cover' alt="" />
              </div>
              <div className="info absolute top-[65%] mx-10">
                <span className='text text-xl'>Just Do It</span>
                <p className='text text-3xl capitalize pb-4'>{src.text}</p>
                <button type="button" className='bg-white text-black rounded-full px-3 py-2 font-semibold'>Shop Now</button>
              </div>
            </div>
          ))}
        </section>

        {/* select category */}
        <h1 data-aos="fade-up" data-aos-duration="1000" className='text text-2xl mx-12 my-6 capitalize'>shop by category</h1>
        <section data-aos="fade-up" data-aos-duration="1500">
          <div className="category mb-8 flex justify-center flex-wrap mx-10 gap-3 md:flex-nowrap">
            {categories.map((category, index) => (              
              <div className="box capitalize flex flex-col-reverse mb-8" key={index} id={category.value.toLowerCase()}>

                <p className='text text-lg'>{category.title}</p>

                <Link to={`/card${category.link}`} onClick={()=>filterByCategory(category.value)}><img src={category.img} className='w-[500px] object-cover rounded-sm' alt={category.title} /></Link>

              </div>              
            ))}
          </div>
        </section>

        {/* feature products cards */}
        <h1 data-aos="fade-up" data-aos-duration="1000" className='popular text-center mx-8 mb-5 text-[40px]'>Popular Collection</h1>
        <div data-aos="fade-up" data-aos-duration="1500" className="grid grid-cols-2 mx-3 gap-5 md:grid-cols-3 lg:grid-cols-4 ">
          {popularItems.map(item => (
            <div key={item.popular} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="relative p-4">
                <Link to={`/product/${item.id}`} className='cursor-pointer'><img
                  src={item.image_url[1]}
                  alt={item.name}
                  className="w-full h-48 object-contain scale-120"
                /></Link>
                
              </div>

              <div className="p-5">
                <Link to={`/product/${item.id}`} className='cursor-pointer'>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{item.description.slice(0, 60)}...</p>

                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{item.rating}</span>
                    </div>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-600">In Stock</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">${item.price}</span>
                  </div>
                </Link>
              </div>
            </div>

          ))}
        </div>


        {/* Second Hero Section */}
        <section data-aos="fade-up" data-aos-duration="1500" className="relative overflow-hidden mt-8 sm:mt-12">
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&h=600&fit=crop"
              alt="Luxury fashion collection"
              className="w-full h-full object-cover"
            />
            <div  className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent">
              <div className="max-w-7xl mx-auto px-4 h-full">
                <div className="flex items-center h-full max-w-2xl">
                  <div data-aos="fade-up" data-aos-duration="1800" className="space-y-4 sm:space-y-6">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                      Summer Collection
                      <span className="block text-yellow-400">2025</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-200">
                      Experience the perfect blend of comfort and style with our latest
                      summer collection. Each piece tells a story of craftsmanship and elegance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium inline-flex items-center justify-center hover:bg-gray-100 transition-colors text-sm sm:text-base">
                        Explore Collection
                        <FaArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                      <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-white/10 transition-colors text-sm sm:text-base">
                        View Lookbook
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* slider */}
        <Slider />
      </main>
    </div>
  )
}

export default Home
