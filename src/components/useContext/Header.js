import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Cart from "./Viewcart ";
const Header = ({ cart }) => {
  return (
    <div className="navbar">
      <div className="logo">Food Cart</div>

      <ul>
        <li>
          {" "}
          <Link to="/">Home</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/cart">
            {" "}
            <span className="cart-count">{cart.length}</span> Viewcart
          </Link>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Header;
