import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
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
          <Link to="/login-register"> Login|Register </Link>
          </div>
         </div>
         <div className="rightSide">
          <Link to="/cart">
          <FaShoppingCart/>
          </Link>
          <Link to="/home"> Home </Link>
          <Link to="/product"> Product </Link>
          <Link to="/view-payment"> View Payment </Link>
          <Link to="/login-register"> Login|Register </Link>
          <button onClick={toggleNavbar}>
            <FaAlignJustify/>
          </button>
         </div>
    </div>
  );
}

export default Navbar; 