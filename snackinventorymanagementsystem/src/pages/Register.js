import React, { useState } from 'react';
import axios from 'axios'; 
import Logo from "../assets/logo.png";
import '../styles/Register.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [accountType, setAccountType] = useState('customer');
  const [error, setError] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

   const navigate = useNavigate();

   const isValidEmail = (email) => {
  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

  const handleRegister = () => {


    if (!username || !email || !password || !contactNumber) {
      setError('Please fill up all the required information.');
      return;
    }

       if (!isValidEmail(email)) {
    setError('Please enter a valid email address.');
    return;
  }

    const userData = { username, email, password, contactNumber, accountType };

    axios.post('http://localhost:8081/register', userData)
      .then(response => {
        if (response.data && response.data.message) {
          console.log(response.data.message);
          setRegistrationSuccess(true);
          setError('');

          navigate('/');
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
    <div className="register-container">
      <img src={Logo} alt="logo" className='logo'/>
      <header>SNACK INVENTORY MANAGEMENT SYSTEM</header>
      <div className="register-form">
        <h2>Registration Form</h2>
        <label>Username:</label>
        <input type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Email</label>
        <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Contact Number</label>
        <input type="tel" placeholder="Enter contact-number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
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
        <button onClick={handleRegister}>Register</button>
        {registrationSuccess && (
          
          <div className="success-message">Registration successful!</div>
        )}
        <p>Already have account?<Link to="/">Login</Link></p>
        {error && <div className="error-dialog">{error}</div>}
      </div>
    </div>
  );
}

export default Register;
