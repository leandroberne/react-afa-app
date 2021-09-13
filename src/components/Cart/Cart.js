import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext';

const Cart = () => {
  const { cart, removeItem, clear } = useContext(CartContext);

  const totalPrice = (arreglo) => {
    let total = 0;
    arreglo.forEach((item) => {
      total += item.item[0].price * item.quantity;
    });
    return total.toFixed(2);
  };

  return (
    <div>
      <h1>CART (Carrito de Compras)</h1>
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
                <tr key={item.item[0].id}>
                  <th scope='row'>{item.quantity}</th>
                  <td>{item.item[0].title}</td>
                  <td>$ {item.item[0].price}</td>
                  <td>$ {item.item[0].price * item.quantity}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className='Carrito'
                      onClick={() => {
                        removeItem(item.item[0].id);
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
        </div>
      )}
    </div>
  );
};

export default Cart;
