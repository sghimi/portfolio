import React from 'react';

const ThemeToggleButton = ({ toggleTheme }) => {
  return (
    <button 
      onClick={toggleTheme} 
      style={{ position: 'fixed', top: 16, right: 16, zIndex : 100 }}
    >
      Toggle Theme
    </button>
  );
}

export default ThemeToggleButton;