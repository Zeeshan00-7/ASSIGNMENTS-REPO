
import React, { useState } from 'react';
import Autocomplete from '../molecules/Autocomplete';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const names = [
    'John Smith',
    'Jane Doe',
    'Michael Johnson',
    'Emily Davis',
    'Zeeshan',
    'Sarfaraz',
    'Anoop',
    'Watson',
    'Heidi Casey',
'Armando Eaton',
'Miley Huerta',
'Douglas Bernard',
'Barbara Mosley',
'Rayden Carlson',
'Kali Higgins',
'Sterling Christian',
'Anahi Hanna',
'Aydin Lawrence',
'Lauren Roman',
'Kian Benjamin',
'Jianna Marks',
'Amos Tucker',
'Esther Farmer',
'Jamison Benson',
'Collins Nielsen',
'Tru Carroll',
'Zar'
  ];

  const handleSearchChange = (value) => {
    setSearchValue(value);

    const filteredSuggestions = names.filter((name) =>
      name.toLowerCase().startsWith(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  return (
    <div className="search-bar-container">
    <Autocomplete
      value={searchValue}
      onChange={handleSearchChange}
      suggestions={suggestions}
    />
    <ul className="suggestions-list">
      {suggestions.map((suggestion, index) => (
        <li key={index}>{suggestion}</li>
      ))}
    </ul>
  </div>

  );
};

export default SearchBar;