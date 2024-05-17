import React, { useState } from 'react';

function Button() {
  const [bgColor, setBgColor] = useState('white'); // Initial background color

  // Function to change the background color randomly
  const changeBackgroundColor = () => {
    const randomColor = getRandomColor();
    setBgColor(randomColor);
  };

  // Function to generate a random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div style={{ backgroundColor: bgColor, minHeight: '100vh', transition: 'background-color 0.5s' }}>
      <h1>Background Color Changer</h1>
      <button onClick={changeBackgroundColor}>Change Color</button>
    </div>
  );
}

export default Button;
