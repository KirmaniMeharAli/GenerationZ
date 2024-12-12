// src/components/ProductCard.js
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = () => {
    if (user) {
      addToCart(product);
    } else {
      navigate('/account', { state: { from: location.pathname } });
    }
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button
        onClick={handleAddToCart}
        className="add-to-cart-btn"
        style={{ backgroundColor: 'green', color: 'white' }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
