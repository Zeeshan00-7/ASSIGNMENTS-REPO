
import React from 'react';
import Input from '../atoms/Input';
import styles from './Autocomplete.module.css';

const Autocomplete = ({ value, onChange, suggestions }) => {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className={styles.container}>
      <Input value={value} onChange={handleInputChange} className={styles.input} />
      <ul className={styles.suggestions}>
        {suggestions.map((suggestion, index) => (
          <li className={styles.suggestion} key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
