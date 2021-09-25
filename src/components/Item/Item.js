import React from 'react';
import './Item.css';

const Item = ({ data }) => {
  return (
    <div className='card text-center bg-dark'>
      <div className='overflow'>
        <img src={data.img} alt='imagen' className='card-img-top' />
      </div>
      <div className='card-body text-light'>
        <h4 className='card-title'>{data.title}</h4>
        <p className='card-text text-white'>$ {data.price}</p>
      </div>
    </div>
  );
};

export default Item;
