// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ query, onSearch }) => {
  return (
    <div className="container mt-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search notes..."
        value={query}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
