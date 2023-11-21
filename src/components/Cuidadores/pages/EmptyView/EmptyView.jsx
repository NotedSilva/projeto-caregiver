import React from 'react';
import '../EmptyView/EmptyViewStyles.css';
import animation from '../../../../assets/search1.gif'

const EmptyView = () => (
  <div className='emptyView-wrap'>
    <img src={animation} alt='' />
  </div>
);

export default EmptyView;