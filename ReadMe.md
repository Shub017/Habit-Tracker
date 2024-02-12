# Habit Tracker App Documentation

## Overview

The Habit Tracker app is a web application designed to help users track their daily habits. It provides a user interface to add new habits, update their progress, and view habit-related information.

## Technologies Used

### Frontend
- **HTML, CSS, JavaScript**: Used for building the user interface and handling client-side logic.
- **Tailwind CSS**: A utility-first CSS framework used for styling components.
- **BootStrap**: A utility-first CSS framework used for styling 
components.
- **Express.js**: A minimal and flexible Node.js web application framework used for handling server-side logic.
- **EJS (Embedded JavaScript)**: A templating engine for generating dynamic HTML templates.

### Backend
- **Node.js**: A JavaScript runtime for executing server-side code.
- **Express.js**: Used for setting up the server and handling HTTP requests.
- **Express EJS Layouts**: Middleware for using EJS layouts in Express applications.

### Database Interaction
- **Controller Module**: Responsible for handling routes and interacting with the database.
- **MongoDB**: A NoSQL database used for storing user and habit-related data.

## Key Features

1. **User Authentication Modal**
   - Displays a modal upon application startup to capture user information (User ID, Name).

2. **Habit Tracker Table**
   - Dynamically generates a table with habit-related information, including habit names and progress for the past seven days.

3. **Add New Habit**
   - Allows users to add new habits by entering the habit name in a text field and clicking the "Add New Habit" button.

4. **Update Habit Status**
   - Enables users to update the status of their habits by clicking radio buttons indicating whether the habit is done, not done, or none.

5. **Server-Side Logic**
   - Utilizes Express.js for routing and handling HTTP requests.
   - Implements server-side logic for saving user data, adding new habits, and updating habit statuses.

## Getting Started

1. **Installation**
   - Clone the repository to your local machine.
   - Run `npm install` to install the necessary dependencies.

2. **Environment Variables**
   - Create a `.env` file and set up environment variables (e.g., database connection string).

3. **Run the Application**
   - Execute `npm start` to start the server.
   - Access the application at `http://localhost:PORT` (replace `PORT` with the specified port number).

## Future Enhancements

- **User Authentication**: Implement a more robust user authentication system for secure user identification.
- **User Dashboard**: Create a personalized dashboard for users to visualize and analyze their habit data.
