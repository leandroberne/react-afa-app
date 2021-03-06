import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext';

const Cart = () => {
  const { cart, removeItem, clear, totalPrice } = useContext(CartContext);

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='Carrito-container'>
      {goToTop()}
      <h1>Mi carrito({cart.length})</h1>
      {cart.length > 0 ? (
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Cantidad</th>
              <th scope='col'>Nombre</th>
              <th scope='col'>Costo unidad</th>
              <th scope='col'>Costo parcial</th>
              <th scope='col'>Quitar</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              return (
                <tr key={item.id}>
                  <th scope='row'>{item.quantity}</th>
                  <td>{item.title}</td>
                  <td>$ {item.price}</td>
                  <td>$ {item.price * item.quantity}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className='Tachito'
                      onClick={() => {
                        removeItem(item.id);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>
          <h2>No hay productos</h2>
          <Link to='/'>
            <button className='btn btn-primary'>Volver a la tienda</button>
          </Link>
        </div>
      )}
      {cart.length > 0 && (
        <div>
          <p className='totalPrice'>Total: $ {totalPrice(cart).toString()}</p>
          <button className='btn btn-danger' onClick={clear}>
            Borrar todo el carrito
          </button>
          <Link to='/payment'>
            <button className='btn btn-success'>Finalizar compra</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
