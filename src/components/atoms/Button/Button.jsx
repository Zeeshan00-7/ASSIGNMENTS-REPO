import React from 'react';

const Button = ({ onClick, children }) => (
  <button className="delete-button" onClick={onClick}>{children}</button>
);

export default Button;



