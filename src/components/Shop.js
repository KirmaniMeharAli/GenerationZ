// src/components/Shop.js
import React, { useState, useContext, useEffect } from 'react';
import ProductCard from './ProductCard';
import { CartContext } from '../context/CartContext';
import Filter from './Filter';
import './Shop.css';

const products = [
  { id: 1, name: 'GOD OF WAR RAGNORK', description: 'PS5 EXCLUSIVE TITLE.', price: 34.99, category: 'PS5', image: 'https://m.media-amazon.com/images/I/81xvGU4pfHL._AC_SL1500_.jpg' },
  { id: 2, name: 'HORIZON FORBIDDEN WEST', description: 'PS5 COMPLETE EDITION.', price: 49.99, category: 'PS5', image: 'https://m.media-amazon.com/images/I/81R6G6lBp6L._AC_SL1500_.jpg' },
  { id: 3, name: 'Marvel’s Spider-Man 2', description: 'PS5 LAUNCH EDITION.', price: 59.99, category: 'PS5', image: 'https://m.media-amazon.com/images/I/81xUyHhjnOL._AC_SL1500_.jpg' },
  { id: 4, name: 'Wireless Mouse', description: 'Ergonomic design and long battery life.', price: 29.99, category: 'Mouse', image: 'https://m.media-amazon.com/images/I/71Gyc208hvL._AC_SL1500_.jpg' },
  { id: 5, name: 'Laptop Stand', description: 'Adjustable height for better ergonomics.', price: 49.99, category: 'Laptop Stand', image: 'https://m.media-amazon.com/images/I/71GMtNr13QL._AC_SL1500_.jpg' },
  { id: 6, name: 'Phone Charger', description: 'Fast charging with a long cable.', price: 19.99, category: 'Phone Charger', image: 'https://m.media-amazon.com/images/I/71v-f8WkFgL._AC_SL1500_.jpg' },
  { id: 7, name: 'Wireless Keyboard', description: 'Quiet and responsive keys with long battery life.', price: 79.99, category: 'Keyboard', image: 'https://m.media-amazon.com/images/I/61CA6tFSxcL._AC_SL1500_.jpg' },
  { id: 8, name: 'USB Hub', description: 'Expand your USB ports for multiple devices.', price: 24.99, category: 'USB Hub', image: 'https://m.media-amazon.com/images/I/61FFBZwEvtL._AC_SL1500_.jpg' },
  { id: 9, name: 'Gaming Mouse', description: 'High precision for gaming performance.', price: 59.99, category: 'Mouse', image: 'https://m.media-amazon.com/images/I/61fjq9eujBL._AC_SL1500_.jpg' },
];

// Dynamically generate categories based on products
const categories = [...new Set(products.map(product => product.category))];

const Shop = () => {
  const { addToCart } = useContext(CartContext);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    handleFilterChange({ category: selectedCategory, priceRange, searchTerm });
  }, [selectedCategory, priceRange, searchTerm]);

  const handleFilterChange = ({ category, priceRange, searchTerm }) => {
    let filtered = products;

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (priceRange) {
      filtered = filtered.filter(
        (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
      );
    }

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handlePriceChange = (range) => {
    setPriceRange(range);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="shop-container">
      <Filter
        categories={categories}
        onFilterChange={handleFilterChange}
        onSearch={handleSearch}
        onPriceChange={handlePriceChange}
        onCategoryChange={handleCategoryChange}
        priceRange={priceRange}
        selectedCategory={selectedCategory}
      />
      <div className="shop">
        <h2>Shop All Products</h2>
        <div className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
