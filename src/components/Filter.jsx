import React from 'react';

const Filter = ({ setFilter }) => {
  return (
    <div className="filter">
      <label>Filter by Category: </label>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option>All</option>
        <option>Wi-Fi</option>
        <option>Printer</option>
        <option>Performance</option>
      </select>
    </div>
  );
};

export default Filter;
