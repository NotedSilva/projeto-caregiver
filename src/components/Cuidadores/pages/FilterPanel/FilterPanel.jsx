import React from 'react';
import { categoryList, ratingList } from '../../../../db/DbCuidadores';
import '../FilterPanel/FilterPanelStyles.css';
import FilterListToggle from '../FilterListToggle/FilterListToggle';
import CheckboxProton from '../CheckboxProton/Checkbox';
import SliderProton from '../SliderProton/SliderProton';

const FilterPanel = ({
  selectedCategory,
  selectCategory,
  selectedRating,
  selectRating,
  localização,
  handleChangeChecked,
  localizacao,
  changeChecked,
  selectedPrice,
  changePrice,
  resetFilters,
}) => {
  return (
    <div className='filtros-panel'>
      {/* Category */}
      <div className="input-group1">
        <p className="label">Categoria</p>

        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectCategory}
        />
      </div>

      {/* Localizacao */}
      <div className="input-group1">
  <p className="label">Localização</p>
  {Array.isArray(localização) && localização.map((localizacaoItem) => (
    <CheckboxProton
      key={localizacaoItem.id}
      localização={localizacaoItem}
      changeChecked={handleChangeChecked}
    />
  ))}
</div>

      {/* Price Range */}
      <div className='input-group1'>
        <p className="label-range">Preço</p>
        <SliderProton value={selectedPrice} changePrice={changePrice} />
      </div>

      {/* Star Rating */}
      <div className="input-group1">
        <p className="label">Avaliação</p>
        <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      </div>

      {/* Resetar Filtros */}
      <div className="input-group1">
        <button className="reset-button" onClick={resetFilters}>
          Resetar Filtros
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
