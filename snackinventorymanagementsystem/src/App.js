import React from 'react';
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import Menu from "./pages/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
              <Navbar />
              <Routes>
               
                <Route path="/" exact element={<Home />} />
                <Route path="/menu" exact element={<Menu />} />
                
              </Routes>
            </Router>
        </div>
    );
}

export default App;