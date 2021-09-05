import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const sumQuantity = (arreglo) => {
    let sumatory = 0;
    arreglo.forEach((element) => (sumatory += element.quantity));
    return sumatory;
  };

  return (
    <div>
      {cart.length > 0 && (
        <Link className='link' to='/cart'>
          <FontAwesomeIcon icon={faShoppingCart} className='Carrito' />
          <span className='quantityCart'>{sumQuantity(cart).toString()}</span>
        </Link>
      )}
    </div>
  );
};

export default CartWidget;
