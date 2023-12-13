import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useCart } from '../pages/CartContext';
import Cart from "../pages/Cart";
import { FaShoppingCart } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {

  const { getCartCount } = useCart();
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };
  return (
    <div className="navbar">
        <div className="leftSide">
          <img src={Logo} alt="logo"/>
         </div>
         <div> 
         
         <div className="rightSide">
          <Link to="/cart">
          <FaShoppingCart/>  <span onClick={toggleCart}>{getCartCount()}</span>
          {showCart && <Cart/>}
          </Link>
          <Link to="/home"> Home </Link>
          <Link to="/product"> Product </Link>
          <Link to="/orders"> Orders</Link>
          <Link to="/total-sales"> Total Sales </Link>
          <Link to="/inventory"> Inventory </Link>
         </div>
         </div>
    </div>
  );
};

export default Navbar; 