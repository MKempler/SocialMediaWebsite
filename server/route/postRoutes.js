// Output to the log that the module is loaded successfully!
console.log("[postRoutes] initialized");

// Include the postController module
let postController = require('../controller/postController');

// Require the express library
var express = require('express');

var router = express.Router();

// All posts routes
router.route('/')
  .get((req, res) => {
    postController.getAllPosts(req, res);
  })
  .post((req, res) => {
    postController.createPost(req, res);
  });

// Post by array index route
router.route('/:postId')
  .get((req, res) => {
    postController.getPost(req, res);
  })
  .put((req, res) => {
    postController.updatePost(req, res);
  })
  .patch((req, res) => {
    postController.updatePost(req, res);
  })
  .delete((req, res) => {
    postController.deletePost(req, res);
  });

// Find post by title route
router.route('/find/:title')
  .get((req, res) => {
    postController.getPostByTitle(req, res);
  });

module.exports = router;
