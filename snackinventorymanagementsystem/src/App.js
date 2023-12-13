import React from 'react';
import { CartProvider } from './pages/CartContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import './App.css';
import Orders from './pages/Orders';

function App() {
    return (

        <div className="App">
            <CartProvider>
            <Router>
              <Routes>
                <Route path="/" exact element={<Login/>} />
                <Route path="/register" exact element={<Register/>} />
                <Route path="/home" exact element={<Home />} />
                <Route path="/product" exact element={<Product />} />
                <Route path="/cart" exact element={<Cart />} />
                <Route path="/orders" exact element={<Orders />} />
              </Routes>
            </Router>
            </CartProvider>
        </div>
      
    );
}

export default App;