const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(1337, function() {
  console.log('Server listening on port 1337.');
});
