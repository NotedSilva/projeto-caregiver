import React from 'react';
import '../EmptyView/EmptyViewStyles.css';
import animation from '../../../../assets/animation.gif'

const EmptyView = () => (
  <div className='emptyView-wrap'>
    <img src={animation} alt='' />
  </div>
);

export default EmptyView;