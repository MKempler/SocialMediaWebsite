//output that the module is loaded successfully!
console.log("[user] initialized");

function user(first, last, email, password, age) {
	this.firstName = first;
	this.lastName = last;
	this.email = email;
	this.password = password;
	this.age = age;
}

exports.createUser = function(first, last, email, password, age) {
  return new user(first, last, email, password, age);
};