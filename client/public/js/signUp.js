const express = require('express');
const app = express();
const userService = require('./userService');

app.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  
  // Call the signUpUser function
  const result = await userService.signUpUser(firstName, lastName, email, password);
  
  if (result.success) {
    // User sign up successful
    res.status(200).json({ message: result.message });
  } else {
    // Error signing up user
    res.status(500).json({ message: result.message });
  }
});

document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const firstNameField = document.getElementById("first-name");
  const lastNameField = document.getElementById("last-name");
  const emailField = document.getElementById("email");
  const passwordField = document.getElementById("password");

  const firstName = firstNameField.value.trim();
  const lastName = lastNameField.value.trim();
  const email = emailField.value.trim();
  const password = passwordField.value.trim();

  if (firstName === "" || lastName === "" || email === "" || password === "") {
    alert("Sign up failed. Please fill out all fields.");
    return;
  }

  fetch("/signUp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ firstName, lastName, email, password })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert(data.message);
      window.location.replace("/"); 
    } else {
      alert(data.message);
    }
  })
  .catch(error => {
    console.error(error);
    alert("An error occurred while signing up.");
  });
});

app.listen(1337, () => {
  console.log('Server listening on port 1337');
});
