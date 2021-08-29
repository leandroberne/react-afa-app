import React, { useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ data }) => {
  const [value, setValue] = useState('');

  const onAdd = (quantity) => {
    setValue(quantity);
  };

  return (
    <>
      <div className='ItemDetail'>
        <div className='ItemDetail-image'>
          <img src={data.image} alt='Imagen de Producto' />
        </div>
        <div className='ItemDetail-content'>
          <h2>{data.title}</h2>
          <h3>$ {data.price}</h3>
          <p>{data.description}</p>
          {value ? (
            <Link to='/cart'>
              <button className='btn btn-primary'>Terminar compra</button>
            </Link>
          ) : (
            <ItemCount stock={10} initial={1} onAdd={onAdd} />
          )}
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
