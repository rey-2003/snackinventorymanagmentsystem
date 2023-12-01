import React from 'react'
import { FaFacebookMessenger } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="SocMed">
        <FaYoutube/> <FaFacebookMessenger/> <FaGoogle/> <FaInstagram/>
        </div>
      <p> &copy; 2021 snackavenue.com</p>
    </div>
  )
}

export default Footer;