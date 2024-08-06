import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeToggleButton = ({ toggleTheme, isDarkMode }) => {
  return (
    <button 
      onClick={toggleTheme} 
      style={{ 
        position: 'fixed', 
        bottom: '30px', 
        left: '20px', 
        zIndex: 100, 
        padding: '8px', 
        borderRadius: '50%', 
        background: 'transparent', 
        color: isDarkMode ? '#ffdd57' : '#333', 
        border: 'none', 
        cursor: 'pointer' 
      }}
    >
      <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} size="lg" />
    </button>
  );
}

export default ThemeToggleButton;
