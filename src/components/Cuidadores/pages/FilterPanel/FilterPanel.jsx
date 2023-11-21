import React from 'react'
import { categoryList, ratingList } from '../../../../db/DbCuidadores';
import '../FilterPanel/FilterPanelStyles.css'
import FilterListToggle from '../FilterListToggle/FilterListToggle';
import CheckboxProton from '../CheckboxProton/Checkbox'
import SliderProton from '../SliderProton/SliderProton';


const FilterPanel = ({selectedCategory,selectCategory,selectedRating,selectRating, localização, changeChecked, selectedPrice, changePrice}) => {
  return (
    <div>
      {/* Category */}
      <div className="input-group">
        <p className="label">Categoria</p>

        <FilterListToggle
        options={categoryList}
        value={selectedCategory}
        selectToggle={selectCategory}
        />
      </div>

      {/* Localizaçao */}
      <div className="input-group">
      <p className="label">Localização</p>
       {localização.map(localização=>
       <CheckboxProton 
       key={localização.id}
       localização={localização}
       changeChecked={changeChecked}
       />)} 
      </div>
      {/* Price Range */}
      <div className='input-group'>
      <p className="label-range">Preço</p>
      <SliderProton
       value={selectedPrice}
       changePrice={changePrice} />
      </div>

      {/* Star Rating */}
      <div className="input-group">
      <p className="label">Avaliação</p>
      <FilterListToggle
        options={ratingList}
        value={selectedRating}
        selectToggle={selectRating}
      />
      </div>
    </div>
  )
}

export default FilterPanel; 