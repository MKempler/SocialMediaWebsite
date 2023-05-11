// Output to the log that the module is loaded successfully!
console.log("[postController] initialized");

// Include the post model
let Post = require('../model/post');
let postService = require('../service/postService');

async function createPost(req, res) {
  console.log("Request Body: ", req.body);

  let title = req.body.title;
  let content = req.body.content;
  let author = req.body.author;

  console.log("Title: ", title);
  console.log("Content: ", content);
  console.log("Author: ", author);

  try {
    const result = await postService.createPost(title, content, author);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(result));
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: 'Error creating post.' });
  }
}

async function getAllPosts(req, res) {
  try {
    const posts = await postService.getAllPosts();
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(posts));
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: 'Error retrieving posts.' });
  }
}

function getPostByTitle(req, res) {
  let title = req.params.title;
  let post = posts.find((post) => post.title === title);
  if (post) {
    res.setHeader('Content-Type', 'application/json');
    res.send(post);
  } else {
    res.status(404).send('Post not found');
  }
}

function getPost(req, res) {
  let postId = parseInt(req.params.postId);
  let post = posts.find((post) => post.id === postId);
  if (post) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(post));
  } else {
    res.status(404).send('Post not found');
  }
}

function updatePost(req, res) {
  let postId = parseInt(req.params.postId);
  let title = req.body.title;
  let content = req.body.content;
  let author = req.body.author;

  let post = posts.find((post) => post.id === postId);
  if (post) {
    post.title = title || post.title;
    post.content = content || post.content;
    post.author = author || post.author;

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(post));
  } else {
    res.status(404).send('Post not found');
  }
}

function deletePost(req, res) {
  let postId = parseInt(req.params.postId);

  let index = posts.findIndex((post) => post.id === postId);
  if (index !== -1) {
    posts.splice(index, 1);

    res.setHeader('Content-Type', 'application/json');
    res.send({ message: 'Post deleted successfully!' });
  } else {
    res.status(404).send('Post not found');
  }
}

module.exports = {
  createPost,
  getAllPosts,
  getPostByTitle,
  getPost,
  updatePost,
  deletePost,
};
