import React from "react"
import {Routes,Route} from "react-router-dom"
import Home from "./Pages/HomePage"
import Login from "./Pages/LoginPage"
import Product from "./Pages/ProductPage"
import Cart from "./Pages/CartPage"
import ProductDetail from "./Pages/ProductDetail"
import Model from "./Model"
import Product2 from "./Pages/ProductPage2"
import ProductDetail2 from "./Pages/ProductDetail2"

const AllRoutes = ()=>{
   return (
    <div>
        <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/product" element={<Product/>}/>
              <Route path="/product2" element={<Product2/>}/>
              <Route path="/cart"  element={<Cart/>}/>
              <Route path="/model"  element={<Model/>}/>
              <Route path="/product/:id"  element={<ProductDetail/>}/>
              <Route path="/product2/:id"  element={<ProductDetail2/>}/>
              <Route path="/cart/:id"  element={<Cart/>}/>
        </Routes>
    </div>
   )
}

export default AllRoutes