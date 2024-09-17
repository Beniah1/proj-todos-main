import { useState, useEffect } from 'react';

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.setAttribute('data-bs-theme', 'dark');
    } else {
      html.setAttribute('data-bs-theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      className={`btn btn-sm ${isDarkMode ? 'btn-light' : 'btn-dark'}`}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
}

export default DarkModeToggle;