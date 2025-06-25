import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { products } from '../product';
import { ShoppingCart, Heart, Share2, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { button, image } from 'framer-motion/client';


export default function Product({items}) {
  // useparams    
    const {id}=useParams();
    
    const product=items.find(p=>p.id ===parseInt(id,10));

     const productImage=()=>{
      const imageUrls = Object.values(product.image_url); // Extract all image URLs
      return imageUrls.filter(url => url && url.length > 0); 
      }
  const i=productImage()
  console.log(i)

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('M');
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const [isImage,setImage]=useState(product.image_url[1]);


  
  const colors = [
    { name: 'Black', value: 'black', bgColor: 'bg-gray-900' },
    { name: 'White', value: 'white', bgColor: 'bg-white' },
    { name: 'Navy', value: 'navy', bgColor: 'bg-blue-900' },
    { name: 'Red', value: 'red', bgColor: 'bg-red-600' },
  ];

    // size
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
//   quantity
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Product Page */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Images */}
        <div className="md:w-1/2">
          <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
            <img 
              src={isImage} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
            
          <div className="grid grid-cols-4 gap-2">                  
               {i.map((item,index)=>(
              <button onClick={()=>setImage(item)} key={product.id} className="bg-gray-100 rounded-lg overflow-hidden cursor-pointer">                
                <img                     
                key={index}
                  src={item} 
                  alt={`Product - View ${product.name} `} 
                  className="w-full h-full object-cover"
                />
              
              </button>    
               ))}   

          </div>
                                                                                          
        </div>

        {/* Product Info */}
        <div className="md:w-1/2">
          <div className="mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <a href="#" className="hover:text-blue-600">Apparel</a>
              <span>/</span>
              <a href="#" className="hover:text-blue-600">T-Shirts</a>
            </div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {i.map((star) => (
                  <Star key={star.rating} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-500">4.9 (120 reviews)</span>
            </div>
            <p className="text-2xl font-bold mb-4">${product.price}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
          </div>

          {/* Color Selection */}
          {/* <div className="mb-6">
            <h2 className="font-semibold mb-2">Color: {colors.find(c => c.value === selectedColor)?.name}</h2>
            <div className="flex gap-2">
              {colors.map((color) => (
                <button
                  key={color.value}
                  className={`w-8 h-8 rounded-full ${color.bgColor} ${selectedColor === color.value ? 'ring-2 ring-blue-500 ring-offset-2' : 'ring-1 ring-gray-300'}`}
                  onClick={() => setSelectedColor(color.value)}
                  title={color.name}
                />
              ))}
            </div>
          </div> */}

          {/* Size Selection */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold">Size: {selectedSize}</h2>
              <button className="text-sm text-blue-600 hover:underline">Size Guide</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`w-10 h-10 flex items-center justify-center rounded-md border ${selectedSize === size ? 'bg-gray-900 text-white border-gray-900' : 'border-gray-300 hover:border-gray-900'}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <h2 className="font-semibold mb-2">Quantity</h2>
            <div className="flex items-center border border-gray-300 rounded-md w-32">
              <button 
                className="px-3 py-2 text-gray-500 hover:text-gray-700" 
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
              >
                <ChevronDown className="w-4 h-4" />
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-full text-center focus:outline-none"
              />
              <button 
                className="px-3 py-2 text-gray-500 hover:text-gray-700" 
                onClick={increaseQuantity}
              >
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md flex items-center justify-center gap-2 font-medium">
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
            <button className="p-3 rounded-md border border-gray-300 hover:bg-gray-100">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-3 rounded-md border border-gray-300 hover:bg-gray-100">
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          {/* Product Details */}
          <div className="border-t border-gray-200 pt-4">
            <div className="border-b border-gray-200">
              <button 
                className="flex justify-between items-center w-full py-3 text-left font-medium"
                onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
              >
                <span>Description</span>
                {isDescriptionOpen ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {isDescriptionOpen && (
                <div className="pb-4 text-gray-600">
                  <p>{product.description}</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>100% organic cotton</li>
                    <li>Pre-shrunk fabric</li>
                    <li>Tear-away label</li>
                    <li>Machine washable</li>
                  </ul>
                </div>
              )}
            </div>
            
            <div className="border-b border-gray-200">
              <button 
                className="flex justify-between items-center w-full py-3 text-left font-medium"
                onClick={() => setIsSpecsOpen(!isSpecsOpen)}
              >
                <span>Specifications</span>
                {isSpecsOpen ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {isSpecsOpen && (
                <div className="pb-4 text-gray-600">
                  <div className="grid grid-cols-2 gap-2">
                    <div>Material</div>
                    <div>100% Organic Cotton</div>
                    <div>Weight</div>
                    <div>180 GSM</div>
                    <div>Care</div>
                    <div>Machine wash cold, tumble dry low</div>
                    <div>Origin</div>
                    <div>Ethically made in Portugal</div>
                  </div>
                </div>
              )}
            </div>
            
            <div>
              <button 
                className="flex justify-between items-center w-full py-3 text-left font-medium"
                onClick={() => setIsReviewsOpen(!isReviewsOpen)}
              >
                <span>Reviews (120)</span>
                {isReviewsOpen ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {isReviewsOpen && (
                <div className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="font-bold text-3xl">4.9</div>
                    <div>
                      <div className="flex mb-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <div className="text-sm text-gray-500">Based on 120 reviews</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="border-t border-gray-200 py-4">
                      <div className="flex items-center gap-2 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="font-medium">Excellent quality and fit</span>
                      </div>
                      <p className="text-gray-600 mb-2">This t-shirt is exactly what I was looking for. The material is soft yet sturdy, and the fit is perfect. I've already ordered two more in different colors!</p>
                      <div className="text-sm text-gray-500">Sarah T. - 3 days ago</div>
                    </div>
                    
                    <div className="border-t border-gray-200 py-4">
                      <div className="flex items-center gap-2 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="font-medium">Best basic tee I've owned</span>
                      </div>
                      <p className="text-gray-600 mb-2">The quality of this shirt is outstanding. It's become my go-to for both casual and slightly dressier occasions. Washes well without shrinking.</p>
                      <div className="text-sm text-gray-500">Michael D. - 1 week ago</div>
                    </div>
                  </div>
                  
                  <button className="text-blue-600 hover:text-blue-800 font-medium">Read all 120 reviews</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};