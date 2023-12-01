const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Register",
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to the database');
});

// Handle user registration
app.post('/register', (req, res) => {
  const { username, email, password, contactNumber, accountType } = req.body;
  console.log('Received registration request:', { username, email, password, contactNumber, accountType });
  
  // Perform your registration logic here using SQL queries
  const sql = 'INSERT INTO users (username, email, password, contactNumber, accountType) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [username, email, password, contactNumber, accountType], (err, result) => {
    if (err) {
      console.error('Registration failed:', err.stack);
      res.status(500).json({ error: 'Registration failed' });
      return;
    }
    res.status(200).json({ message: 'Registration successful' });
  });
});

// Handle user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Perform your login logic here using SQL queries
  const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error('Login failed:', err.stack);
      res.status(500).json({ error: 'Login failed' });
      return;
    }

    if (result.length > 0) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3001${PORT}`);
});
