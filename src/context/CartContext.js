// src/context/CartContext.js
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    // Load cart and order history from local storage if available
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    const savedOrderHistory = JSON.parse(localStorage.getItem('orderHistory'));
    if (savedCart) {
      setCart(savedCart);
    }
    if (savedOrderHistory) {
      setOrderHistory(savedOrderHistory);
    }
  }, []);

  useEffect(() => {
    // Save cart and order history to local storage whenever they change
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
  }, [cart, orderHistory]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: quantity } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const placeOrder = (orderDetails) => {
    const newOrder = {
      id: orderHistory.length + 1,
      date: new Date().toISOString(),
      items: cart,
      total: getTotalPrice(),
      ...orderDetails,
    };
    setOrderHistory((prevOrderHistory) => [...prevOrderHistory, newOrder]);
    setCart([]); // Clear the cart after placing the order
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, getTotalPrice, placeOrder, orderHistory }}>
      {children}
    </CartContext.Provider>
  );
};
