const { Pool } = require('pg');

// PostgreSQL connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'panther',
  password: '9670',
  port: 5432,
});

// Function to handle user sign up
async function signUpUser(firstName, lastName, email, password) {
  try {
    const client = await pool.connect();
    const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)';
    const values = [firstName, lastName, email, password];
    await client.query(query, values);
    client.release();
    return { success: true, message: 'User sign up successful!' };
  } catch (error) {
    return { success: false, message: 'Error signing up user.' };
  }
}

// Function to handle user login
async function loginUser(email, password) {
  try {
    const client = await pool.connect();
    const query = 'SELECT * FROM users WHERE email = $1 AND password = $2';
    const values = [email, password];
    const result = await client.query(query, values);
    client.release();
    if (result.rows.length === 1) {
      const user = result.rows[0];
      return { success: true, message: 'Login successful!', user };
    } else {
      return { success: false, message: 'Invalid email or password.' };
    }
  } catch (error) {
    return { success: false, message: 'Error logging in.' };
  }
}

module.exports = { signUpUser, loginUser };
