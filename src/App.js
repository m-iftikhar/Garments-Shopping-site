import React from 'react'
import Navbar from './Component/Navbar'
import {BrowserRouter, browserRouter,Route,Routes} from "react-router-dom"
import LoginSignup from './Pages/LoginSignup'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Footer from './Component/Footer'
 import men_banner from '../src/Assets/banner_mens.png'
 import wommen_banner from '../src/Assets/banner_women.png'
 import kid_banner from '../src/Assets/banner_kids.png'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" /> }  />
        <Route path='/womens' element={<ShopCategory  banner={wommen_banner} category="women"/> } />
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/> } />
        <Route path='/product' element={<Product/>} > 
            <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>} /> 
        <Route path='/login' element={<LoginSignup/>} /> 
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
