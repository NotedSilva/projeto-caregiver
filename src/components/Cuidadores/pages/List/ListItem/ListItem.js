import React from 'react';
import '../ListItem/ListItemStyles.css';

const ListItem = ({
  item: { coverSrc, name, price, category, localization, rating },
}) => (
  <div className='listItem-wrap'>
    <img src={coverSrc} alt='' />
    <header>
      <h4>{name}</h4>
      <span>⭐{rating}</span>
    </header>
    <footer>
      <p>
        <b>{localization}</b> <span>{category}</span>
      </p>
      <p>
        <b>${price}</b>
      </p>
    </footer>
  </div>
);

export default ListItem;