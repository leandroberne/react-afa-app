import React from 'react';
import './Item.css';

const Item = ({ data }) => {
  return (
    <div className='card'>
      <img src={data.img} className='card-img-top' alt='Imagen de card'></img>
      <div className='card-body'>
        <h5 className='card-title'>{data.title}</h5>
        <button href='/#' className='btn btn-primary'>
          +
        </button>
      </div>
    </div>
  );
};

export default Item;
