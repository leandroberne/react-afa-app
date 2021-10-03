import React, { useState } from 'react';
import './ItemCount.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

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
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4 col-sm-offset-4'>
          <div className='input-group mb-3'>
            <div className='input-group-prepend'>
              <button className='btn btn-dark btn-sm' onClick={onDecrease}>
                <FontAwesomeIcon icon={faMinus} />
              </button>
            </div>
            <input
              id='inputNumber'
              type='text'
              className='form-control form-control-sm'
              value={number}
              onChange={() => number}
            />
            <div className='input-group-prepend'>
              <button className='btn btn-dark btn-sm' onClick={onIncrease}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
          <div className='btnAdd'>
            <button
              className='btn btn-secondary'
              id='btnAgregarCount'
              onClick={() => onAdd(number)}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
        <div className='col-sm-4'></div>
      </div>
    </div>
  );
};

export default ItemCount;
