import React, { useContext, useState } from 'react'
import data from "./product.json"
import Product from './Product'
import "./Home.css"
import { cartContext } from '../../App'
const Home = () => {
  const [products,setProducts]=useState(data)
  const {cart,setCart}=useContext(cartContext)
  // console.log(products);
  
  return (
    <div className='product-conatiner'>
      {
        products.map(product=>(
         <Product key={product.id} product={product} cart={cart} setCart={setCart}/>
        ))
      }
     
    </div>
  )
}

export default Home
