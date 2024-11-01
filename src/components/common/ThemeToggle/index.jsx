import React, { useEffect, useState } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    // Set the `data-theme` attribute to control CSS variable usage
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button onClick={toggleTheme} className="p-2 rounded bg-primary text-text">
      Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  );
}

export default ThemeToggle;
