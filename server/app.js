const express = require('express');
const app = express();

// Serve static files from the 'client/public' directory
app.use(express.static('client/public'));

// Route for the root URL
app.get('/', function (req, res) {
  res.sendFile('index.html', {root: './client/views' });
});

// Route for the login URL
app.get('/login', function (req, res) {
  res.sendFile('login.html', {root: './client/views' });
});

// Route for the post URL
app.get('/post', function (req, res) {
  res.sendFile('post.html', {root: './client/views' });
});

// Route for the about URL
app.get('/about', function (req, res) {
  res.sendFile('about.html', {root: './client/views' });
});

// Start the server
app.listen(1337, () => console.log('Listening on port 1337!'));

