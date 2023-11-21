import React from 'react'
import { Search } from '@mui/icons-material';
import '../SearchBar/SearchBarStyles.css';

const SearchBar = ({ value, changeInput }) => {
  return (
    <div className='searchBar-wrap'>
       <Search className='searchBar-icon' />
    <input
      type='text'
      placeholder='Encontre seu cuidador'
      value={value}
      onChange={changeInput}
    />
    </div>
  )
}

export default SearchBar;