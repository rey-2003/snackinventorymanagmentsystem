import React from 'react';
import LoginRegister from "./pages/LoginRegister";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
              <Navbar />
              <Routes>
                <Route path="/" exact element={<LoginRegister/>} />
                <Route path="/login-register" exact element={<LoginRegister/>} />
                <Route path="/home" exact element={<Home />} />
                <Route path="/product" exact element={<Product />} />
                <Route path="/cart" exact element={<Cart />} />
              </Routes>
              <Footer />
            </Router>
        </div>
    );
}

export default App;