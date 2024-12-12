// src/components/Checkout.js
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const { cart, getTotalPrice, placeOrder } = useContext(CartContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const navigate = useNavigate();

  const handleCheckout = (e) => {
    e.preventDefault();
    // Handle the checkout process
    const orderDetails = { name, email, address, paymentMethod };
    placeOrder(orderDetails);
    alert('Order placed successfully!');
    // Redirect to order confirmation page with state
    navigate('/order-confirmation', {
      state: {
        customerInfo: { name, email, address },
        paymentMethod,
        total: parseFloat(getTotalPrice())
      }
    });
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <form onSubmit={handleCheckout} className="checkout-form">
          <div className="checkout-field">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="checkout-field">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="checkout-field">
            <label>Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="checkout-field">
            <label>Payment Method:</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </div>
          <div className="checkout-total">
            <h3>Total Price: ${getTotalPrice()}</h3>
          </div>
          <button type="submit" className="checkout-button">Place Order</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
