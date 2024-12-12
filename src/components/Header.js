// src/components/Header.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <div className="logo">
        <h1>GenerationZ</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/cart">Cart ({cart.length})</Link></li>
          {user ? (
            <>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/order-history">Order History</Link></li>
              <li><button onClick={logout} className="logout-button">Logout</button></li>
            </>
          ) : (
            <li><Link to="/account">Login</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
