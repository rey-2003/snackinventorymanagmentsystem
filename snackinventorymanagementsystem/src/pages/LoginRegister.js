import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
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
   const [registrationSuccess, setRegistrationSuccess] = useState(false);
   const navigate = useNavigate();

  const handleLogin = () => {

    if (!username || !password || !accountType) {
    setError('Please fill up all the required information.');
    return;
  }
  const userData = { username, password, accountType };
  axios.post('http://localhost:8081/login', userData,{ withCredentials: true})
    .then(response => {
      if (response.data && response.data.success) {
        console.log('Login successful!'); // Successful login message
        // You can also perform additional actions here, such as setting user state
        setError('');
        onLogin();
         // Assuming onLogin is a callback function passed as a prop
          navigate('/Home');
          console.log('Login successful!');
      } else {
        console.error('Login failed:', response.data ? response.data.error : 'Unexpected response format');
        setError('Login failed');
      }
    })
    .catch(error => {
      console.error(error.response ? error.response.data.error : 'Network error');
    
    });
};
  
  const handleRegister = () => {
  // Check if any required field is empty
  if (!username || !email || !password || !contactNumber) {
    setError('Please fill up all the required information.');
    return;
  }

  const userData = { username, email, password, contactNumber, accountType };

  axios.post('http://localhost:8081/register', userData)
    .then(response => {
      if (response.data && response.data.message) {
        console.log(response.data.message);
        setRegistrationSuccess(true);
        setError('');
        onRegister();
      } else {
        console.error('Unexpected response format:', response);
        setError('Error: Unexpected response format');
      }
    })
    .catch(error => {
      console.error(error.response ? error.response.data.error : 'Network error');
    });
};

  return (
    <div className="login-container">
      <header>SNACK INVENTORY MANAGEMENT SYSTEM</header>
      <div className="login-form">
        <h2>{isLogin?'Login':'Registration Form'}</h2>
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
        <button onClick={handleLogin}>Login</button>
        ):(
        <button onClick={handleRegister}>Register</button>)}
        {registrationSuccess && (
          <div className="success-message">Registration successful!</div>
        )}
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