# Node.js Blog Project

## Description

This project is a Node.js blog application that includes user authentication, role-based access control, and basic CRUD operations for posts.

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
