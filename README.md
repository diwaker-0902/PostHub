PostHub is a mini social media platform where users can sign up, log in, and interact with posts. It provides a simple, clean interface for users to create, edit, and like posts. The project demonstrates a full-stack web application built using Node.js, Express, MongoDB, and EJS for templating. Authentication is handled using JWT (JSON Web Tokens), and password security is ensured with bcrypt.

Key Features:
User Authentication: Users can register with their email, username, and password. Passwords are securely hashed using bcrypt, and JWT tokens are used to manage login sessions.
User Profiles: Each user has their own profile, where they can view their posts and interact with them.
Post Management: Users can create new posts, edit their existing posts, and delete them if needed.
Like Functionality: Users can like or unlike posts, with real-time updates to the like count.
Session Management: The app uses cookies to store JWT tokens for session management, allowing for secure and efficient user authentication.

Tech Stack:
Backend: Node.js, Express.js for routing and middleware.
Database: MongoDB for storing users and posts.
Authentication: JWT for user sessions and bcrypt for password encryption.
Frontend: EJS for server-side rendering of dynamic content.
Security: Passwords are hashed using bcrypt, and JWT is used to secure routes.

Installation and Usage:
Clone the repository to your local machine.
Install the required dependencies with npm install.
Set up a MongoDB database and update the connection string in your app.
Run the application using npx nodemon app.js
Visit http://localhost:3000 in your browser to interact with the app.

Thank you for visiting.
