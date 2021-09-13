import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => cart.some((item) => item.item[0].id === id);

  const addItem = (item, quantity) => {
    if (isInCart(item[0].id)) {
      const newCart = [...cart];
      const encontrado = newCart.find(
        (element) => element.item[0].id === item.id
      );
      encontrado[0].quantity += quantity;
      setCart(newCart);
    } else {
      setCart([...cart, { item, quantity }]);
    }
  };

  const removeItem = (id) => {
    const newCart = [...cart];
    setCart(newCart.filter((element) => element.item[0].id !== id));
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};
