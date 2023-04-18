// Output to the log that the module is loaded successfully!
console.log("[postController] initialized");

// Include the post model
let Post = require('../model/post');

var posts = [];

let post1 = Post.createPost("My First Post", "This is my first post.", "Max Kempler");
let post2 = Post.createPost("My Second Post", "This is my second post.", "Adam Kempler");
let post3 = Post.createPost("My Third Post", "This is my third post.", "Jack Kempler");

posts.push(post1);
posts.push(post2);
posts.push(post3);

// Function to create a new post
function createPost(req, res) {
  let title = req.body.title;
  let content = req.body.content;
  let author = req.body.author;

  let newPost = Post.createPost(title, content, author);

  posts.push(newPost);

  res.setHeader('Content-Type', 'application/json');
  res.send(newPost);
}

function getPostByTitle(req, res) {
    let title = req.params.title;
    let post = posts.find(post => post.title === title);
    if (post) {
      res.setHeader('Content-Type', 'application/json');
      res.send(post);
    } else {
      res.status(404).send('Post not found');
    }
  }
  
exports.getPostByTitle = getPostByTitle;
  

exports.getAllPosts = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(posts);
};

exports.getPost = function(req, res) {
  let post = posts[req.params.postId];
  if (post) {
    res.setHeader('Content-Type', 'application/json');
    res.send(post);
  } else {
    res.status(404).send('Post not found');
  }
};

exports.createPost = createPost;

exports.updatePost = function(req, res) {
  let postId = req.params.postId;
  let title = req.body.title;
  let content = req.body.content;
  let author = req.body.author;

  let post = posts[postId];
  if (post) {
    post.title = title || post.title;
    post.content = content || post.content;
    post.author = author || post.author;

    res.setHeader('Content-Type', 'application/json');
    res.send(post);
  } else {
    res.status(404).send('Post not found');
  }
};

exports.deletePost = function(req, res) {
  let postId = parseInt(req.params.postId);

  let index = posts.findIndex(post => post.id === postId);
  if (index !== -1) {
    posts.splice(index, 1);

    res.setHeader('Content-Type', 'application/json');
    res.send({ message: 'Post deleted successfully!' });
  } else {
    res.status(404).send('Post not found');
  }
};