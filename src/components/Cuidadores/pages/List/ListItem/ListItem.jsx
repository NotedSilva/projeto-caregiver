import React from 'react';
import '../ListItem/ListItemStyles.css';

const ListItem = ({
  item: { coverSrc, name, price, category, localization, rating, description },
}) => (
  <div className='listItem-wrap'>
    <img src={coverSrc} alt='' />
    <div className='together-list'>
    <header>
      <h4>{name}</h4><span className='span-2'>(52 avaliações)</span>
      <span>⭐{rating}</span>
    </header>
    <div className="mid-list">
    <span>{description}</span>
    </div>
    <footer>
      <p>
        <b>{localization}</b> <span>{category}</span>
      </p>
      <p>
        <b>${price}</b>
      </p>
    </footer>
    </div>
  </div>
);

export default ListItem;