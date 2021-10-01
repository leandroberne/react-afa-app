import React, { useState, useContext } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext';
import PropTypes from 'prop-types';

const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState('');

  const onAdd = (amount) => {
    setQuantity(amount);
  };

  const { addItem } = useContext(CartContext);

  return (
    <>
      <div className='ItemDetail'>
        <div className='ItemDetail-image'>
          <img src={item.img} alt='Imagen de Producto' />
        </div>
        <div className='ItemDetail-content'>
          <h2>{item.title}</h2>
          <h3>$ {item.price}</h3>
          <p>{item.description}</p>
          {quantity ? (
            <Link to='/cart'>
              <button
                className='btn btn-primary'
                id='btnGoToCart'
                onClick={() => {
                  addItem(item, quantity);
                }}
              >
                Ir al Carrito
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

ItemDetail.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    img: PropTypes.string,
    description: PropTypes.string,
    stock: PropTypes.number,
    price: PropTypes.number,
  }),
};

export default ItemDetail;
