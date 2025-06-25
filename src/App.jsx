import { useEffect, useState } from 'react'
import { BrowserRouter, Link, Routes, Router, Route, useLocation } from 'react-router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ScrollToTop from './components/ScrollToTop'
import Home from './components/Home'
import Product from './components/Product'
import Card from './components/Card'
import Contact from './components/Contact'
import Cart from './components/Cart'
import Signup from './components/Signup'
import Login from './components/Login'

import Layout from './components/LayoutWrapper'
import { products } from './product';
import './App.css'

function App() {
  const [data, setData] = useState([...products]);

  const popularItems = products.filter(product => product.popular)

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route element={<Layout setData={setData} />} >
            <Route path='/' element={<Home popularItems={popularItems} setData={setData} />} />
            <Route path='/card/:category' element={<Card items={data} />} />
            <Route path='product/:id' element={<Product items={data} />} />
            <Route path='contact' element={<Contact />} />
            <Route path='/cart' element={<Cart popularItems={popularItems} />} />
         </Route>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>

              
    </div >

  )
}

export default App
