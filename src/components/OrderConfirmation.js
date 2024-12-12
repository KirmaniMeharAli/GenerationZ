// src/components/OrderConfirmation.js
import React from 'react';
import { useLocation, Link } from 'react-router-dom'; // For accessing passed state and Link for routing
import './OrderConfirmation.css'; // Make sure this path is correct

const OrderConfirmation = () => {
  const location = useLocation(); // Get the state passed from the Checkout page
  const { customerInfo, paymentMethod, total } = location.state || {};

  return (
    <div className="order-confirmation">
      <h3>Order Confirmation</h3>
      {customerInfo ? (
        <div>
          <h4>Thank you for your order, {customerInfo.name}!</h4>
          <div className="details">
            <p><strong>Email:</strong> {customerInfo.email}</p>
            <p><strong>Address:</strong> {customerInfo.address}</p>
            <p><strong>Payment Method:</strong> {paymentMethod === 'Credit Card' ? 'Credit Card' : paymentMethod}</p>
            <p className="total-price"><strong>Total Price:</strong> ${total.toFixed(2)}</p>
          </div>
          <p>Your order is being processed and will be shipped soon. Thank you for shopping with us!</p>
          <Link to="/" className="go-home-btn">Go to Homepage</Link>
        </div>
      ) : (
        <p>There was an issue with your order. Please try again.</p>
      )}
    </div>
  );
};

export default OrderConfirmation;
