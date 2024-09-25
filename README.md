# Todo Dashboard Application 📝✨

## Overview

This React-based Todo Dashboard application provides a comprehensive task management system with user authentication. It features a clean, responsive UI with dark mode support, and utilizes modern React practices and hooks. 🚀

## Key Features

- User Authentication (Signup, Login, Logout) 🔐
- Todo Management (Add, View, Edit, Delete, Mark as Complete) ✅
- Dark Mode Toggle 🌙
- Responsive Design 📱💻
- User Profile Display 👤
- Gradient Background with Animation 🌈
- Glassmorphism Effect on Cards 🔍

## Demo

<div align="center">
  
<img src="./src/assets/Demo-Day-ToDo (2).png" width="600" alt="Todo Dashboard">
<img src="./src/assets/Demo-Day-ToDo (3).png" width="600" alt="Todo Dashboard">
<img src="./src/assets/Demo-Day-ToDo (1).png" width="600" alt="Todo Dashboard">
  
  <br>
  <button onclick="previousImage()">Previous</button>
  <button onclick="nextImage()">Next</button>
</div>

<script>
let currentImageIndex = 0;
const images = document.querySelectorAll('div[align="center"] > img');

function showImage(index) {
  images.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}

function previousImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
}

showImage(currentImageIndex);
</script>

## Components

### User Management

- `Signup`: Allows new users to create an account 📝
- `Login`: Handles user authentication 🔑
- `Logout`: Enables users to sign out 👋
- `User`: Displays user information 👤

### Todo Management

- `TodoDashboard`: Main component that renders the todo list and form 📊

typescript:src/features/Todos/TodoDashboard.jsx
startLine: 14
endLine: 85

- `Todos`: Displays the list of todos 📋
- `TodoForm`: Allows users to add new todos ➕
- `TodoItem`: Renders individual todo items with options to complete, update, or delete ✏️

typescript:src/features/Todos/TodoItem.jsx
startLine: 6
endLine: 68

- `UpdateTodoForm`: Allows users to edit existing todos 🔄

typescript:src/features/Todos/UpdateTodoForm.jsx
startLine: 4
endLine: 69

### Utilities

- `DarkModeToggle`: Toggles between light and dark mode 🌓

## Technologies Used

- React ⚛️
- React Router for navigation 🧭
- React Query for state management and API calls 🔄
- Bootstrap for styling 🎨
- Custom CSS for advanced styling and animations ✨
- Custom hooks for authentication, user management, and todo operations 🎣

## Getting Started

1. Clone the repository 📂
2. Install dependencies: `npm install` 📦
3. Start the development server: `npm run dev` 🚀

## Project Structure

src/
├── components/
│ └── DarkModeToggle.jsx
├── features/
│ ├── Todos/
│ │ ├── TodoDashboard.jsx
│ │ ├── TodoDashboard.css
│ │ ├── Todos.jsx
│ │ ├── TodoForm.jsx
│ │ ├── TodoItem.jsx
│ │ ├── UpdateTodoForm.jsx
│ │ ├── useAddTodos.js
│ │ ├── useDeleteTodo.js
│ │ └── useUpdateTodo.js
│ └── users/
│ ├── Login.jsx
│ ├── Signup.jsx
│ ├── User.jsx
│ ├── Logout.jsx
│ ├── useLogin.js
│ ├── useSignup.js
│ ├── useUser.js
│ └── useGetTodos.js
└── App.jsx

## Styling

The application uses a combination of Bootstrap and custom CSS for styling:

- Gradient background with animation 🌈
- Glassmorphism effect on cards 🔍
- Custom button styles 🎨
- Responsive design for various screen sizes 📱💻
- Dark mode support 🌙

typescript:src/features/Todos/TodoDashboard.css
startLine: 1
endLine: 194

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 🤝

## License

This project is licensed under the MIT License. 📄
