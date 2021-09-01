import React, { useState, createContext } from 'react';

export const CartContext = createContext();

let carrito = [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (arreglo) => {
    /* setCart(cart.push(arreglo));
    console.log(cart); */
    carrito.push(arreglo);
    console.log(carrito);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addItem }}>
      {children}
    </CartContext.Provider>
  );
};
