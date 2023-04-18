// output to the log that the module is loaded successfully!
console.log("[userRoutes] initialized");

// Include the userController module
let userController = require('../controller/userController');

// require the express library
var express = require('express');

var router = express.Router();


// all users routes
router.route('/')
.get( ( req, res ) => {
  userController.getAllUsers( req, res );
})
.post( ( req, res ) => {
  userController.saveUser( req, res );
});

// user by array index route
router.route('/:userId')
.get( ( req, res ) => {
  userController.getUser( req, res );
})
.put( ( req, res ) => {
  userController.updateUser( req, res );
})
.patch( ( req, res ) => {
  userController.updateUser( req, res );
})
.delete( ( req, res ) => {
  userController.deleteUser( req, res );
});

// find user by email route
router.route('/find/:email')
.get( ( req, res ) => {
  userController.getUserByEmail( req, res );
});

module.exports = router;


