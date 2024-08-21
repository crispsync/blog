import React, { useEffect, useState } from 'react';

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Check if the code is running in the browser
    if (typeof window !== 'undefined') {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setDarkMode(isDarkMode);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`w-10 h-10 rounded-full focus:outline-none ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} flex items-center justify-center transition-colors duration-300`}
    >
      {darkMode ? <span className="text-yellow-300">🌙</span> : <span className="text-gray-800">☀️</span>}
    </button>
  );
};

export default ThemeToggle;
