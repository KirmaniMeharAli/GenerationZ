// src/components/OrderHistory.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './OrderHistory.css';

const OrderHistory = () => {
  const { orderHistory } = useContext(CartContext);

  return (
    <div className="order-history-container">
      <h2>Order History</h2>
      {orderHistory.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul className="order-history-list">
          {orderHistory.map((order) => (
            <li key={order.id} className="order-history-item">
              <h3>Order ID: {order.id}</h3>
              <p>Date: {new Date(order.date).toLocaleString()}</p>
              <p>Total: ${order.total}</p>
              <ul>
                {order.items.map((item) => (
                  <li key={item.id}>
                    {item.name} - ${item.price} x {item.quantity}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
