import React from 'react';

const Input = ({ value, onChange, placeholder }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default Input;
