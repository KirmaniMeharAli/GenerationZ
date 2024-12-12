// src/components/ProductDetails.js
import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './ProductDetails.css';

const products = [
  { id: 1, name: 'GOD OF WAR RAGNORK', description: 'PS5 EXCLUSIVE TITLE .', price: 34.99, category: 'PS5', image: 'https://m.media-amazon.com/images/I/81xvGU4pfHL._AC_SL1500_.jpg' },
  { id: 2, name: 'HORIZON FORBIDDEN WEST', description: 'PS5 COMPLETE EDITION.', price: 49.99, category: 'PS5', image: 'https://m.media-amazon.com/images/I/81R6G6lBp6L._AC_SL1500_.jpg' },
  { id: 3, name: 'Marvel’s Spider-Man 2', description: 'PS5 LAUNCH EDITION.', price: 59.99, category: 'PS5', image: 'https://m.media-amazon.com/images/I/81xUyHhjnOL._AC_SL1500_.jpg' },
  { id: 4, name: 'Wireless Mouse', description: 'Ergonomic design and long battery life.', price: 29.99, category: 'Mouse', image: 'https://m.media-amazon.com/images/I/71Gyc208hvL._AC_SL1500_.jpg' },
  { id: 5, name: 'Laptop Stand', description: 'Adjustable height for better ergonomics.', price: 49.99, category: 'Laptop Stand', image: 'https://m.media-amazon.com/images/I/71GMtNr13QL._AC_SL1500_.jpg' },
  { id: 6, name: 'Phone Charger', description: 'Fast charging with a long cable.', price: 19.99, category: 'Phone Charger', image: 'https://m.media-amazon.com/images/I/71v-f8WkFgL._AC_SL1500_.jpg' },
  { id: 7, name: 'Wireless Keyboard', description: 'Quiet and responsive keys with long battery life.', price: 79.99, category: 'Keyboard', image: 'https://m.media-amazon.com/images/I/61CA6tFSxcL._AC_SL1500_.jpg' },
  { id: 8, name: 'USB Hub', description: 'Expand your USB ports for multiple devices.', price: 24.99, category: 'USB Hub', image: 'https://m.media-amazon.com/images/I/61FFBZwEvtL._AC_SL1500_.jpg' },
  { id: 9, name: 'Gaming Mouse', description: 'High precision for gaming performance.', price: 59.99, category: 'Mouse', image: 'https://m.media-amazon.com/images/I/61fjq9eujBL._AC_SL1500_.jpg' },
];

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details-container">
      <div className="product-details">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price.toFixed(2)}</p>
          {/* <button onClick={() => addToCart(product)} className="add-to-cart-btn">Add to Cart</button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
