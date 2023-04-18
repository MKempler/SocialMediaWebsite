// Output to the log that the module is loaded successfully!
console.log("[userController] initialized");

// Include the user model
let User = require('../model/user');

// Creates test users and adds them to the array
var users = [];
let max = User.createUser("Max", "Kempler", "max.kempler1@marist.edu", "letmein", 20);
let adam = User.createUser("Adam", "Kempler", "adam.kempler@marist.edu", "letmein", 20);
let what = User.createUser("What", "Up", "what.up@yahoo.com", "letmein", 20);
let hello = User.createUser("hello", "World", "hello.world@yahoo.com", "letmein", 20);
users.push(max);
users.push(adam);
users.push(what);
users.push(hello);

// Export functions  to handle user data
exports.getAllUsers = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	// Send the users array as the response
	res.send(users);
}

exports.saveUser = function(req, res) {
	// Create a new user object based on the request body
	let newUser = User.createUser(req.body.firstName, req.body.lastName, req.body.email, req.body.password);
	// Add the new user to the users array
	users.push(newUser);
	res.setHeader('Content-Type', 'application/json');
	// Sends the updated user array as the response
	res.send(users);
}

exports.getUser = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	// Send the user with the given userId as the response
  	res.send(users[req.params.userId]);
}

exports.deleteUser = function(req, res) {
	// Remove the user with the given userId from the users array
	users.splice(req.params.userId, 1);
	
	res.setHeader('Content-Type', 'application/json');
	// Send the updated users array as the response
	res.send(users);
}

exports.updateUser = function(req, res) {
	// Get the existing user object from the users array
	var updatedUser = users[req.params.userId];

	// Checks which properties were given in the request body 
	if(req.body.firstName) {
		updatedUser.firstName = req.body.firstName;
	}
	if(req.body.lastName) {
		updatedUser.lastName = req.body.lastName;
	}
	if(req.body.email) {
		updatedUser.email = req.body.email;
	}
	if(req.body.password) {
		updatedUser.password = req.body.password;
	}
	if(req.body.age) {
		updatedUser.age = req.body.age; 
	}

	// Save the updated user object back to the users array
	users[req.params.userId] = updatedUser;

	res.setHeader('Content-Type', 'application/json');
	// Send the updated user object as the response
	res.send(users[req.params.userId]);
}


exports.getUserByEmail = function(req, res) {
	// Get the email parameter from the request
	let email = req.params.email;
	// Find the user with the matching email address
	let user = users.find(user => user.email === email);

	// If a matching user is found, send it as a response
	if(user) {
		res.setHeader('Content-Type', 'application/json');
		res.send(user);
	} else {
		console.log("No user found with email:", email); 
		res.status(404).send({message: 'No user found with email ' + email});
	}
}


