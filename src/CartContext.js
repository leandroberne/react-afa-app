import React, { useState, createContext } from 'react';

export const CartContext = createContext();

const initialCart = {};
let carrito = [];

const addCarrito = (item) => {
  if (item.item.data.id !== undefined) {
    carrito.push(item);
  }
};

export const CartProvider = ({ children }) => {
  const [product, setProduct] = useState(initialCart);
  console.log(product);
  /* addCarrito(product);
  console.log(carrito); */

  return (
    <CartContext.Provider value={[product, setProduct]}>
      {children}
    </CartContext.Provider>
  );
};
