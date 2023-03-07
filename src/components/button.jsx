import React from 'react';

const Button = ({ children, startGame }) => {
  return (
    <button className="button" onClick={() => startGame()}>
      {children}
    </button>
  );
};

export default Button;
