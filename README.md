# Todo Dashboard Application

## Overview

This React-based Todo Dashboard application provides a comprehensive task management system with user authentication. It features a clean, responsive UI with dark mode support, and utilizes modern React practices and hooks.

## Key Features

- User Authentication (Signup, Login, Logout)
- Todo Management (Add, View, Edit, Delete)
- Dark Mode Toggle
- Responsive Design
- User Profile with Image Upload

## Components

### User Management

- `Signup`: Allows new users to create an account
- `Login`: Handles user authentication
- `Logout`: Enables users to sign out
- `User`: Displays user information and allows profile image upload

### Todo Management

- `TodoDashboard`: Main component that renders the todo list and form
- `Todos`: Displays the list of todos
- `TodoForm`: Allows users to add new todos

### Utilities

- `DarkModeToggle`: Toggles between light and dark mode

## Technologies Used

- React
- React Router for navigation
- React Query for state management and API calls
- Bootstrap for styling
- Custom hooks for authentication and user management

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server:
   - If using Create React App: `npm start`
   - If using Vite or a similar modern build tool: `npm run dev`

Make sure to use the appropriate command based on your project setup. The `npm run dev` command is commonly used with Vite and other modern build tools, while `npm start` is typically used with Create React App.

## Project Structure

```
src/
├── components/
│   └── DarkModeToggle.jsx
├── features/
│   ├── Todos/
│   │   ├── TodoDashboard.jsx
│   │   ├── Todos.jsx
│   │   └── TodoForm.jsx
│   └── users/
│       ├── Login.jsx
│       ├── Signup.jsx
│       ├── User.jsx
│       ├── useLogin.js
│       ├── useSignup.js
│       └── useUser.js
└── App.js
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
