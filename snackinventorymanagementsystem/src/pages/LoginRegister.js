import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/LoginRegister.css';
import axios from 'axios'; 


function Login ({ onLogin, onRegister, toggleForm }) {
  const [username, setUsername]  = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
   const [accountType, setAccountType] = useState('customer');
  const [isLogin, setIsLogin] = useState(true);
   const [error, setError] = useState('');

  const handleLogin = () => {
    const userData = { username, password };
  axios.post('http://localhost:3001/login', userData)
    .then(response => {
      if(response.data) {
      console.log(response.data.message);
    } else {
      console.error('Unexpected response format:', response);
    }
  })
    .catch(error => {
      console.error(error.response ? error.response.data.error : 'Network error');
    });
};

  const handleRegister = () => {
   const userData = { username, email, password, contactNumber, accountType };
  axios.post('http://localhost:3001/register', userData)
    .then(response => {
      if (response.data) {
      console.log(response.data.message);
      setError('');
      }else {
        console.error('Unexpected response format:', response);
        setError('Error: Unexpected response format');
      }
    })
    .catch(error => {
     console.error(error.response ? error.response.data.error : 'Network error');
      setError(`Error: ${error.response ? error.response.data.error : 'Network error'}`);
    });
};

  return (
    <div className="login-container">
      <header>SNACK INVENTORY MANAGEMENT SYSTEM</header>
      <div className="login-form">
        <h2>{isLogin?'Login':'Registration Form'}</h2>
        <p>Please enter the required information below.</p>
        <label>Username:</label>
        <input type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
        {!isLogin && (
          <>
          <label>Email</label>
          <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>ContactNumber</label>
          <input type="tel" placeholder="Enter contact-number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
        
          </>
        )}
        <label>Password:</label>
        <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {/* Account Type Selection */}
         <div>
            <p>Account Type:</p>
            <div>
              <label>
                <input
                  type="radio"
                  value="customer"
                  checked={accountType === 'customer'}
                  onChange={() => setAccountType('customer')}
                />
                Customer
              </label>
              <label>
                <input
                  type="radio"
                  value="owner"
                  checked={accountType === 'owner'}
                  onChange={() => setAccountType('owner')}
                />
                Owner
              </label>
            </div>
          </div>
        {isLogin? (
          <Link to="/Home">
        <button onClick={handleLogin}>Login</button>
        </Link> ):(
        <button onClick={handleRegister}>Register</button>)}
        <p onClick={() => setIsLogin(!isLogin)} style={{ color: isLogin ? 'white' : 'white' }}> {isLogin? 'Don\'t have an account? Register': 'Already have an account? Login'}</p>
        <p>
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>

           {/* Error Dialog */}
        {error && <div className="error-dialog">{error}</div>}
      </div>
    </div>
  );
};

export default Login;