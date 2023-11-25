import React from 'react';
import BannerImage from "../assets/milkt.jpg";
import { Link } from "react-router-dom";
import "../styles/Home.css";


function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer" >
        <h1> Snack Avenue </h1>
        <p>A SNACK THAT YOU WON'T FORGET</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;