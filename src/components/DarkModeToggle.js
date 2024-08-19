import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button 
      onClick={toggleDarkMode}
      className="p-2 border border-gray-300 rounded-full text-xs relative dark:border-gray-700"
    >
      {isDarkMode ? <FaSun className="text-lg dark:text-white" /> : <FaMoon className="text-lg dark:text-white" />}
      
    </button>
  );
};

export default DarkModeToggle;
 








