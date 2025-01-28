## Food Delivery System Backend API
This project is a backend API for a food delivery system, built with Node.js, Express.js, and MongoDB. It provides functionality for user authentication, menu management, and order management, with a focus on clean code, validation, and error handling.

## Features
User Authentication: Register and login functionality with hashed passwords and JWT token authentication.
Menu Management: Create, update, delete, and fetch menu items.
Order Management: Place orders, calculate total amounts, and fetch user-specific orders.
Validation: Robust input validation to ensure data integrity.
Error Handling: Graceful handling of invalid data or missing fields.

## Tech Stack
Backend Framework: Node.js, Express.js
Database: MongoDB (local or MongoDB Atlas)
ORM: Mongoose
Authentication: JSON Web Tokens (JWT)
Environment Management: dotenv 

## Prerequisites
Node.js (version 16 or higher) A code editor like VS Code.

## Install the Node.js dependencies:
npm install

Set Up Environment Variables Create a .env file in the root directory and provide the following values:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

## Start the Server
npm start