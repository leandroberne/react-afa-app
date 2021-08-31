import React, { useState, useContext } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext';

const ItemDetail = ({ data }) => {
  const [cant, setCant] = useState('');

  const onAdd = (quantity) => {
    setCant(quantity);
  };

  const [cart, setCart] = useContext(CartContext);

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
          {cant ? (
            <Link to='/cart'>
              <button
                className='btn btn-primary'
                onClick={() => {
                  setCart({ item: { data }, quantity: cant });
                }}
              >
                Terminar compra
              </button>
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
