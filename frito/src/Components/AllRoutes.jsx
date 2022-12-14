import React from "react"
import {Routes,Route} from "react-router-dom"
import Home from "./Pages/HomePage"
import Login from "./Pages/LoginPage"
import Product from "./Pages/ProductPage"
import Cart from "./Pages/CartPage"

const AllRoutes = ()=>{
   return (
    <div>
        <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/product" element={<Product/>}/>
              <Route path="/cart"  element={<Cart/>}/>
        </Routes>
    </div>
   )
}

export default AllRoutes