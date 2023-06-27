# Introduction:
Panther is a  website that lets users express themselves through posts 


## Key Features:

- User Registration and Login: Panther offers an easy user registration and login process, ensuring security

- Create Posts: Users can create engaging and personalized posts, expressing their thoughts, ideas, or experiences

- Feed: The feed enables users to view posts 


## Installation Instructions:

### Dependencies:

express.js: A web application framework for Node.js:
npm install express

Body-parser: Middleware to parse the request body:
npm install body-parser

postgres: DBMS:
brew install postgresql

## Development Notes:

I was able to get it working so a user can sign up, there name email and password are stored in a users table in postgres. And than there's a login page that references the users table and if the imputted email and password match a pair in the table they are logged in and if not they are told log in failed.

I was able to get the same function working for my posts. Where the user can make a posts title and content and when they click post that data is sent to a posts table. And than there is a tab called feed, where all of their posts are fetched from the posts table.
