const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();


app.use(cors({
  origin: 'http://localhost:3000', // Replace with the actual URL of your React app
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
app.use(express.json());
app.get('/', (re,res)=> {
  return res.json("Backend Side");
})
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Register",
});

db.connect((hashError) => {
  if (hashError) {
    console.error('Database connection failed:', hashError.stack);
    return;
  }
  console.log('Connected to the database');
});

// Handle user registration
app.post('/register', (req, res) => {
  const { username, email, password, contactNumber, accountType } = req.body;

  const checkEmailQuery = 'SELECT * FROM register WHERE email =?';
  db.query(checkEmailQuery, [email], (checkEmailError, emailResults) => {
    if (checkEmailError) {
      console.error('Email checking failed:', checkEmailError.stack);
      res.status(500).json({ error: 'Registration failed' });
      return;
    }

    if (emailResults.length > 0) {
      // Email already exists, return an error
      res.status(400).json({ error: 'Email already in use' });
      return;
    }

  
  bcrypt.hash(password, 10, (hashError, hashedPassword) => {
    if (hashError) {
      console.error('Password hashing failed:', hashError);
      res.status(500).json({ error: 'Registration failed'});
      return;
    }
  
  // Perform your registration logic here using SQL queries
  const registerQuery = 'INSERT INTO register (username, email, password, contactNumber, accountType) VALUES (?, ?, ?, ?, ?)';
      db.query(registerQuery, [username, email, hashedPassword, contactNumber, accountType], (registerError, result) => {
        if (registerError) {
          console.error('Registration failed:', registerError.stack);
          res.status(500).json({ error: 'Registration failed' });
          return;
        }
        res.json({ success: true, message: 'Registration successful' });
      });
    });
  });
});

// Handle user login
app.post('/login', (req, res) => {
  const { username, password, accountType } = req.body;

   console.log('Received login request:', { username, password, accountType });

  // Perform login logic using a MySQL query
  const query = 'SELECT * FROM register WHERE username = ? AND accountType = ?';
  db.query(query, [username, accountType], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (results.length > 0) {
        const user = results[0];

        bcrypt.compare(password, user.password, (err, passwordMatch) => {
          if (err) {
            res.status(500).json({error: 'Internal Server Error'});
          } else {
             if (passwordMatch) {

              if(user.username === username && user.accountType === accountType) {

        // Check if the provided password matches the stored password
        
          // Passwords match, login successful
          res.json({ success: true, message: 'Login successful', data: user });
        } else {

          res.json ({ success: false, error: 'Invalid username or account type'});
        }

      } else {
          // Passwords do not match
          res.json({ success: false, error: 'Invalid password ' });
        }
      }
    });
    
      } else {
        // User not found
        res.json({ success: false, error: 'Invalid username or account type' });
      }
    }
  });
});

const PORT = 8081;

app.listen(8081, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
