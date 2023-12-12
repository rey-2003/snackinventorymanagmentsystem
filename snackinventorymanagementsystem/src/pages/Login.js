import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../styles/Login.css';
import axios from 'axios'; 
import Logo from "../assets/logo.png";

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState('customer');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password || !accountType) {
      setError('Please fill up all the required information.');
      return;
    }
    
    const userData = { username, password, accountType };

    axios.post('http://localhost:8081/', userData, { withCredentials: true })
      .then(response => {
        console.log('Login response:', response.data);
        
        if (response.data && response.data.success) {
          console.log('Login successful!');
          const { data } = response.data;

          if (data.setUsername === username && data.accountType === accountType) {
          setError('');
          onLogin();
          navigate('/Home');
        } else { 
          setError('Invalid username or account type');

        }
      }else {
          console.error('Login failed:', response.data ? response.data.error : 'Unexpected response format');
          setError('Invalid username, account type, or password');
        }
      })
      .catch(error => {
        console.error(error.response ? error.response.data.error : 'Network error');
      });
  };

  return (
    <div className="login-container">
      <img src={Logo} alt="logo" className='logo'/>
      <header>SNACK INVENTORY MANAGEMENT SYSTEM</header>
      <div className="login-form">
        <h2>Login</h2>
        <label>Username:</label>
        <input type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Password:</label>
        <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
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
        <button onClick={handleLogin}>Login</button>
        <p>
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
        <p>Don't have an account? <Link to="/register">Create Account</Link></p>
        {error && <div className="error-dialog">{error}</div>}
      </div>
    </div>
  );
}

export default Login;
