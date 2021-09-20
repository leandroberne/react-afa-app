import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => cart.some((item) => item.id === id);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = [...cart];
      const foundItem = newCart.find((element) => element.id === item.id);
      foundItem.quantity += quantity;
      setCart(newCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (id) => {
    const newCart = [...cart];
    setCart(newCart.filter((element) => element.id !== id));
  };

  const clear = () => {
    setCart([]);
  };

  const totalPrice = (array) => {
    let total = 0;
    array.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
