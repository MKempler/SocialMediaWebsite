const { Pool } = require('pg');

// postgres connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'panther',
  password: '9670',
  port: 5432,
});

// Function to create a new post
async function createPost(title, content, author) {
  try {
    const client = await pool.connect();
    const query = 'INSERT INTO posts (title, content, author) VALUES ($1, $2, $3)';
    const values = [title, content, author];
    await client.query(query, values);
    client.release();
    return { success: true, message: 'Post created successfully!' };
  } catch (error) {
    return { success: false, message: 'Error creating post.' };
  }
}

// Function to get all posts
async function getAllPosts() {
  try {
    const client = await pool.connect();
    const query = 'SELECT * FROM posts';
    const result = await client.query(query);
    client.release();
    return result.rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createPost: createPost,
  getAllPosts: getAllPosts,
};
