// FilterByCategory.jsx
import React from 'react';

const FilterByCategory = ({ categories, onSelectCategory }) => {
  return (
    <div className="filter-by-category">
      <label>Filtrar por categoría:</label>
      <select onChange={(e) => onSelectCategory(e.target.value)}>
        <option value="">Todas</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterByCategory;
