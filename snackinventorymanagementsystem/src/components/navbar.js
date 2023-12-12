import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useCart } from '../pages/CartContext';
import Cart from "../pages/Cart";
import { FaShoppingCart } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {

  const { getCartCount } = useCart();
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          <img src={Logo} alt="logo"/>
          <div className="hiddenLinks">
          <Link to="/home"> Home </Link>
          <Link to="/product"> Product </Link>
          <Link to="/view-payment"> View Payment </Link>
          <Link to="/login-register"> Orders </Link>
          </div>
         </div>
         <div> 
         
         <div className="rightSide">
          <Link to="/cart">
          <FaShoppingCart/>  <span onClick={toggleCart}>{getCartCount()}</span>
          {showCart && <Cart/>}
          </Link>
          <Link to="/home"> Home </Link>
          <Link to="/product"> Product </Link>
          <Link to="/view-payment"> Ordered Product </Link>
          <Link to="/login-register"> Login|Register </Link>
          <button onClick={toggleNavbar}>
            <FaAlignJustify/>
          </button>
         </div>
         </div>
    </div>
  );
};

export default Navbar; 