import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => cart.some((item) => item.id === id);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const foundItem = cart.find((element) => element.id === item.id);
      foundItem.quantity += quantity;
      setCart(cart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((element) => element.id !== id));
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
