// Output that the module is loaded successfully!
console.log("[post] initialized");

// A counter to keep track of the number of posts
let postIdCounter = 0;

// An array to hold all the posts
let posts = [];

function createPost(title, content, author) {
  // Increments the postIdCounter
  postIdCounter++;

  // Create a new post object with a unique id, title, content, author, and createdAt time
  let post = {
    id: postIdCounter,
    title: title,
    content: content,
    author: author,
    createdAt: new Date()
  };

  // Add the post to the posts array
  posts.push(post);

  // Return the newly created post
  return post;
}

function getAllPosts() {
  // Return all the posts
  return posts;
}

function getPost(postId) {
  return posts.find(post => post.id === postId);
}

function updatePost(postId, title, content, author) {
  let post = getPost(postId);

  if (post) {
    // Update the post with the new values
    post.title = title;
    post.content = content;
    post.author = author;

    return post;
  }

  // If no post was found with the given id, return null
  return null;
}

function deletePost(postId) {
  // Find the index of the post with the matching id
  let index = posts.findIndex(post => post.id === postId);

  if (index !== -1) {
    // Remove the post from the posts array and return it
    return posts.splice(index, 1)[0];
  }

  // If no post was found with the given id, return null
  return null;
}

module.exports = {
  createPost: createPost,
  getAllPosts: getAllPosts,
  getPost: getPost,
  updatePost: updatePost,
  deletePost: deletePost
};
