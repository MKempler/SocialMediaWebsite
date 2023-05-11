const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./route/userRoutes');
const postRoutes = require('./route/postRoutes');
const { signUpUser, loginUser } = require('./service/userService'); // Add loginUser function

const { Pool } = require('pg');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from the 'client/public' directory
app.use(express.static('client/public'));

// Route for the root URL
app.get('/', function (req, res) {
  res.sendFile('index.html', { root: './client/views' });
});

// Route for the login URL
app.get('/login', function (req, res) {
  res.sendFile('login.html', { root: './client/views' });
});

// Route for the signup URL (display the form)
app.get('/signUp', function (req, res) {
  res.sendFile('signUp.html', { root: './client/views' });
});

// Route for the signup form submission
app.post('/signUp', async function (req, res) {
  const { firstName, lastName, email, password } = req.body;

  try {
    const result = await signUpUser(firstName, lastName, email, password);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'An error occurred while signing up.' });
  }
});

// Route for the login form submission
app.post('/login', async function (req, res) {
  const { email, password } = req.body;

  try {
    const result = await loginUser(email, password);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'An error occurred while logging in.' });
  }
});

// Route for the post URL
app.get('/post', function (req, res) {
  res.sendFile('post.html', { root: './client/views' });
});

// Route for the about URL
app.get('/about', function (req, res) {
  res.sendFile('about.html', { root: './client/views' });
});

// Route for the feed URL
app.get('/feed', function (req, res) {
  res.sendFile('feed.html', { root: './client/views' });
});

// Include the userRoutes module
app.use('/api/user', userRoutes);

// Include the postRoutes module
app.use('/api/post', postRoutes);

// Start the server
app.listen(1337, () => console.log('Listening on port 1337!'));
