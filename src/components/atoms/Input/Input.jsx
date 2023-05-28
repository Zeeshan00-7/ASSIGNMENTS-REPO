import React from 'react';

const Input = ({ value, onChange  }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder= 'what to do?'
    className='input'

  />
);

export default Input;
