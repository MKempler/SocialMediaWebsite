// get all posts
fetch('/post', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    
  });
  
  // create a new post
  const newPost = {
    title: 'Example Post',
    content: 'This is an example post.',
    author: 'Brian Gormanly'
  };
  
  fetch('/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)
  })
  .then(response => response.json())
  .then(data => {
   
  });
  
  // get a single post by ID
  fetch('/post/postId', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    
  });
  
  // update a post by ID
  const updatedPost = {
    title: 'Updated Example Post',
    content: 'This is an updated example post.',
    author: 'Ooga Booga'
  };
  
  fetch('/post/postId', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedPost)
  })
  .then(response => response.json())
  .then(data => {
    
  });
  
  // paritally update a post by ID
  const updatedContent = {
    content: 'This is an updated example post.'
  };
  
  fetch('/post/postId', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedContent)
  })
  .then(response => response.json())
  .then(data => {
    
  });
  
  // delete a post by ID
  fetch('/post/postId', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
   
  });
  
  // search for posts by title
  fetch('/post/find/title', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
  
  });
  