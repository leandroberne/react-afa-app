import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [number, setNumber] = useState(initial);

  const onIncrease = () => {
    if (number < stock) {
      setNumber(number + 1);
    }
  };

  const onDecrease = () => {
    if (number > initial) {
      setNumber(number - 1);
    }
  };

  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>Cantidad: {number}</h5>
        <button className='btn btn-primary' onClick={onDecrease}>
          -
        </button>
        <button className='btn btn-success' onClick={onIncrease}>
          +
        </button>
        <button className='btn btn-secondary' onClick={() => onAdd(number)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
