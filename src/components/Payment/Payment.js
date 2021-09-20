import React, { useContext } from 'react';
import './Payment.css';
import { CartContext } from '../../CartContext';

const Payment = () => {
  const { cart, clear, totalPrice } = useContext(CartContext);

  return (
    <div>
      <h1>Payment (garpa loco)</h1>
      <p>Total a garpar: $ {totalPrice(cart)}</p>
    </div>
  );
};

export default Payment;
