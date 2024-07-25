# Node.js Blog Project

## Description
This project is a comprehensive blog application built using Node.js. It features user authentication and role-based access control to ensure secure access to various parts of the application. The application supports basic CRUD (Create, Read, Update, Delete) operations for blog posts, The application is structured to provide a user-friendly experience with a clean and intuitive interface, while maintaining robust backend functionality.

## Features
User Authentication: Secure login and registration system using JWT (JSON Web Tokens) for session management.
Role-Based Access Control: Differentiated access for users based on their roles (admin and user), ensuring that only authorized users can perform specific actions.
CRUD Operations for Posts: Create, read, update, and delete blog posts with ease.
Flash Messages: Display success and error messages dynamically for user Regester.
Responsive Design: Optimized for both desktop and mobile devices to ensure a seamless experience across different platforms.
## Technologies Used
Backend
Node.js: JavaScript runtime for server-side programming.
Express: Web framework for building RESTful APIs and handling HTTP requests.
MongoDB: NoSQL database for storing blog posts and user data.
Mongoose: ODM (Object Data Modeling) library for MongoDB, providing a schema-based solution to model data.
Middleware & Utilities
bcrypt: Library for hashing passwords securely.
cors: Middleware for enabling Cross-Origin Resource Sharing.
dotenv: Module for loading environment variables from a .env file.
express-ejs-layouts: Layout support for EJS templates in Express.
helmet: Middleware for enhancing security by setting various HTTP headers.
jsonwebtoken: Library for generating and verifying JWT tokens.
nodemailer: Module for sending emails.
nodemon: Tool for automatically restarting the server during development.
socket.io: Library for real-time web socket communication.
supertest: Library for testing HTTP endpoints.
Frontend
EJS: Templating engine for generating HTML markup with embedded JavaScript.
HTML5 & CSS3: Standard technologies for building and styling web pages.
JavaScript: Scripting language for client-side interactivity.
## Development Tools
Git: Version control system for tracking changes and collaborating on the codebase.
Visual Studio Code: Code editor for development.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/GitAbdalla/Node-Blog.git
    cd your-repository
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root of your project and add the following variables:

    ```
    MONGODB_URI=your_mongodb_uri
    JWTSECRET=your_jwt_secret
    ```

4. **Start the server:**

    For development:

    ```bash
    npm run dev
    ```

    For production:

    ```bash
    npm start
    ```

## Usage

1. **Access the Admin Panel:**

    Open your browser and go to `http://localhost:4000`

2. **User Roles:**

    - **Admin:** Has access to the admin dashboard to manage posts 
    - **User:** Can view articles and their details, and can search in the site

3. **CRUD Operations:**

    - **Create:** Admin can create new posts.
    - **Read:** Users can view posts.
    - **Update:** Admin can edit existing posts.
    - **Delete:** Admin can delete posts.

## Contributing

If you want to contribute to this project, feel free to create a pull request or open an issue.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
