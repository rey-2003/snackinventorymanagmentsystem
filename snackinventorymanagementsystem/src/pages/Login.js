import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/Login.css';
import Logo from "../assets/logo.png";

function Login ({ onLogin, onRegister, toggleForm }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    // Add your authentication logic here
    console.log(`Login - Username: ${username}, Password: ${password}`);
  };

  const handleRegister = () => {
    // Add your sign up logic here
    console.log(`Register - Email: ${email}, Password: ${password}, Contact Number: ${contactNumber}`);
  };

  return (
    <div className="login-container">
      <img
        src={Logo}
        alt="Logo"
        className="logo"
      />
      <header>SNACK INVENTORY MANAGEMENT SYSTEM</header>
      <div className="login-form">
        <h2>{isLogin?'Login':'Form Registration'}</h2>
        <label>Username:</label>
        <input type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
        {!isLogin && (
          <>
          <label>Email</label>
          <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>ContactNumber</label>
          <input type="tel" placeholder="Enter contactnumber" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
        
          </>
        )}
        <label>Password:</label>
        <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />

        {isLogin? (
          <Link to="/Home">
        <button onClick={handleLogin}>Login</button>
        </Link> ):(
        <button onClick={handleRegister}>SignUp</button>)}
        <p onClick={() => setIsLogin(!isLogin)} style={{ color: isLogin ? 'white' : 'white' }}> {isLogin? 'Don\'t have an account? Register': 'Already have an account? Login'}</p>
      </div>
    </div>
  );
};

export default Login;
