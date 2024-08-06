import React from 'react';
import './Birds.css'; // Make sure this path matches where you place your CSS

const Birds = () => {
  return (
    <div className="bird-container">
      <div className="bird bird--one"></div>
      <div className="bird bird--two"></div>
      <div className="bird bird--three"></div>
      <div className="bird bird--four"></div>
    </div>
  );
};

export default Birds;
