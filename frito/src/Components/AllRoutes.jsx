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
import ProductDetail3 from "./Pages/ProductDetail3"
import Product3 from "./Pages/ProductPage3"
import Cart2 from "./Pages/CartPage2"
import Cart3 from "./Pages/CartPage3"
import Joinnow from "./Pages/JoinNow"

const AllRoutes = ()=>{
   return (
    <div>
        <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/product" element={<Product/>}/>
              <Route path="/product2" element={<Product2/>}/>
              <Route path="/product3" element={<Product3/>}/>
              
              <Route path="/model"  element={<Model/>}/>
              <Route path="/product/:id"  element={<ProductDetail/>}/>
              <Route path="/product2/:id"  element={<ProductDetail2/>}/>
              <Route path="/product3/:id"  element={<ProductDetail3/>}/>
              <Route path="/cart"  element={<Cart/>}/>
              <Route path="/cart2"  element={<Cart2/>}/>
              <Route path="/cart3"  element={<Cart3/>}/>
              <Route path="/cart/:id"  element={<Cart/>}/>
              <Route path="/cart2/:id"  element={<Cart2/>}/>
              <Route path="/cart3/:id"  element={<Cart3/>}/>
              <Route path="/joinnow"  element={<Joinnow/>}/>

              
        </Routes>
    </div>
   )
}

export default AllRoutes