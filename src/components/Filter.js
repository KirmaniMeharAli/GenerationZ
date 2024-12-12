// src/components/Filter.js
import React, { useState } from 'react';
import './Filter.css';

const Filter = ({ categories, onFilterChange, onSearch, onPriceChange, onCategoryChange, priceRange, selectedCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handlePriceChange = (e) => {
    const value = [0, Number(e.target.value)];
    onPriceChange(value);
  };

  const handleCategoryChange = (e) => {
    onCategoryChange(e.target.value);
  };

  return (
    <div className="filter-container">
      <h3>Filter</h3>
      <div className="filter-section">
        <label>Category</label>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-section">
        <label>Price Range</label>
        <input
          type="range"
          min="0"
          max="200"
          value={priceRange[1]}
          onChange={handlePriceChange}
          step="1"
        />
        <div>
          ${priceRange[0]} - ${priceRange[1]}
        </div>
      </div>
      <div className="filter-section">
        <label>Search</label>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default Filter;
