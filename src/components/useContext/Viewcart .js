import React, { useContext, useEffect, useState } from 'react'
import "./Viewcart "
import Product from './Product'
import { cartContext } from '../../App'
const Viewcart = () => {
  const {cart,setCart}=useContext(cartContext)
  const [total,setTotal]=useState(0)
  useEffect(()=>{
setTotal(cart.reduce((acc,cuurentvalue)=>acc+parseInt(cuurentvalue.price),0))
  },[cart])
  return (
    <>
    <h1>Cart Product</h1>

     <div className='cart-container'>
     {
      cart.map((product)=>(
        <div className="cart-product" key={product.id}>
      <div className="img">
        <img src={product.imgaeUrl} alt="img" />
      </div>

      <div className="cart-product-details">
        <h3>{product.name}</h3>
        <p>Price Rs :{product.price} </p>
      </div>

     </div>
      ))
     }
     
     <h2>Total amount : {total} </h2>
    </div>
    </>
   
  )
}

export default Viewcart
