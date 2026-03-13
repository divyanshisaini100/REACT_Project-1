import React from 'react';

const FilterPanel = ({ filters, onFilterChange }) => {
  const handleBloodGroupChange = (e) => {
    onFilterChange({ ...filters, bloodGroup: e.target.value });
  };

  const handleCityChange = (e) => {
    onFilterChange({ ...filters, city: e.target.value });
  };

  const handleResetFilters = () => {
    onFilterChange({ bloodGroup: '', city: '' });
  };

  return (
    <div className="filter-panel">
      <h2>Filters</h2>
      <div className="filter-group">
        <label htmlFor="bloodGroup">Blood Group:</label>
        <select id="bloodGroup" value={filters.bloodGroup} onChange={handleBloodGroupChange}>
          <option value="">All</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={filters.city}
          onChange={handleCityChange}
          placeholder="Search donors by city"
        />
      </div>
      <button className="reset-button" onClick={handleResetFilters}>
        Reset Filters
      </button>
    </div>
  );
};

export default FilterPanel;