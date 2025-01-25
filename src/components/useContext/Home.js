import React, { useState } from 'react'
import data from "./product.json"
import Product from './Product'
import "./Home.css"
const Home = ({cart,setCart}) => {
  const [products,setProducts]=useState(data)
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
