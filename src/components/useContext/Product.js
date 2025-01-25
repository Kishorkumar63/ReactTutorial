import React from "react";
import "./product.css";
const Product = ({ product, cart, setCart }) => {
  const addCart = () => {
    setCart([...cart, product]);
    console.log(cart);
    
  };
  const removeCart = () => {
    setCart(cart.filter(c=>c.id!==product.id))
  };
  return (
    <div className="product">
      <div className="img">
        <img src={product.imageUrl} alt="" />
      </div>
      <div className="deatils">
        <h3>{product.name}</h3>
        <p>Price Rs : {product.qty}</p>
        {cart.includes(product) ? (
          <button className="btn-remove" onClick={removeCart}>
            Remove To cart{" "}
          </button>
        ) : (
          <button onClick={addCart}>add to cart</button>
        )}
      </div>
    </div>
  );
};

export default Product;
