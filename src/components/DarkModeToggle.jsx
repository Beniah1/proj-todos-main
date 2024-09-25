import { useState, useEffect } from 'react';

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (isDarkMode) {
      html.setAttribute('data-bs-theme', 'dark');
      body.classList.add('dark');
    } else {
      html.setAttribute('data-bs-theme', 'light');
      body.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      className={`btn btn-sm ${isDarkMode ? 'btn-light' : 'btn-dark'} position-fixed top-0 end-0 m-3`}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
}

export default DarkModeToggle;