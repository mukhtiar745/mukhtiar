const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Read users safely
function readUsers() {
  const filePath = path.join(__dirname, 'users.json');
  let users = [];
  if (fs.existsSync(filePath)) {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      users = data ? JSON.parse(data) : [];
    } catch (err) {
      console.error('Error parsing users.json', err);
      users = [];
    }
  }
  return users;
}

// Save users
function saveUsers(users) {
  const filePath = path.join(__dirname, 'users.json');
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}

// Registration
app.post('/register', (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  if (!username || !email || !password || !confirmPassword) {
    return res.send('All fields are required!');
  }

  if (password !== confirmPassword) {
    return res.send('Passwords do not match! <a href="/">Try again</a>');
  }

  let users = readUsers();

  if (users.find(u => u.email === email)) {
    return res.send('Email already registered! <a href="/">Try again</a>');
  }

  users.push({ username, email, password });
  saveUsers(users);

  // Redirect to dashboard
  res.redirect('/dashboard.html');
});

// Login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.send('All fields are required!');

  const users = readUsers();
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    // Redirect to dashboard
    res.redirect('/dashboard.html');
  } else {
    res.send('Invalid email or password. <a href="/">Try again</a>');
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
