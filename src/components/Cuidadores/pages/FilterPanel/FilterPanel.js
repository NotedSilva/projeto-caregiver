import React from 'react'
import { FilterList } from '@mui/icons-material';

const FilterPanel = (categoryList,selectedCategory,selectCategory) => {
  return (
    <div>
      {/* Category */}
      <div className="input-group">
        <p className="label">Categoria</p>
        <FilterList
        options={categoryList}
        value={selectedCategory}
        selectToggle={selectCategory}
        />
      </div>

      {/* Localizaçao */}

      {/* Price Range */}

      {/* Star Rating */}
    </div>
  )
}

export default FilterPanel; 