// Get all users
fetch('/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  
  // Create a new user
  fetch('/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "firstName": "blah",
      "lastName": "McBlahson",
      "email": "blah.blah@gmail.com",
      "password": "123",
      "age": 25
    })
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  
  // Get a specific user
  fetch('/user/userId', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  
  // Update a specific user
  fetch('/user/userId', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "firstName": "What",
      "lastName": "Ever",
      "email": "what.ever@gmail.com",
      "password": "real",
      "age": 30
    })
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  
  // Update part of a specific user
  fetch('/user/userId', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "age": 31
    })
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  
  // Delete a specific user
  fetch('/user/userId', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => console.log('User deleted successfully'))
    .catch(error => console.error(error));
  
  // Find a user by email
  fetch('/user/find/email', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  