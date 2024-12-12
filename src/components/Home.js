import React, { useState, useContext, useEffect, useCallback } from 'react'; // Import React, useState, useContext, useEffect hooks
import ProductCard from './ProductCard';
import { CartContext } from '../context/CartContext'; // Import CartContext
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

import './Home.css';

const Home = () => {
  const { addToCart } = useContext(CartContext); // Use context to get addToCart function
  const navigate = useNavigate(); // Initialize navigate function

  const products = [
    { id: 1, name: 'Wireless Ear buds', description: 'High quality sound with noise cancellation.', price: 99.99, image: 'https://m.media-amazon.com/images/I/71b8S0Q127L._AC_SL1500_.jpg' },
    { id: 2, name: 'Smart Watch', description: 'Track your health and fitness easily.', price: 149.99, image: 'https://m.media-amazon.com/images/I/71plW4A+Y4L._AC_SL1500_.jpg' },
    { id: 3, name: 'Bluetooth Speaker', description: 'Portable and powerful sound anywhere.', price: 59.99, image: 'https://m.media-amazon.com/images/I/71kzInVwzgL._AC_SL1500_.jpg' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0); // State for slider

  const slides = [
    { 
      title: 'Discover the Best Tech Products', 
      description: 'Your favorite gadgets are just a click away!', 
      image: 'https://via.placeholder.com/1200x400?text=Tech+Products+1' 
    },
    { 
      title: 'Upgrade Your Lifestyle', 
      description: 'Find the latest in gadgets, electronics, and more.', 
      image: 'https://via.placeholder.com/1200x400?text=Tech+Products+2' 
    },
    { 
      title: 'Exclusive Offers & Deals', 
      description: 'Shop now and grab exclusive offers before they’re gone.', 
      image: 'https://via.placeholder.com/1200x400?text=Tech+Products+3' 
    }
  ];

  // Memoized function for moving to the next slide
  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length); // Move to the next slide
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000); // Change slide every 5 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [goToNextSlide]); // Add goToNextSlide to the dependency array

  // Handle the Shop Now button click
  const handleShopNowClick = () => {
    navigate('/shop'); // Navigate to the Shop page
  };

  return (
    <div className="home">
      {/* Hero Section with Slider */}
      <header className="hero-section">
        <div className="hero-slide" style={{ backgroundImage: `url(${slides[currentSlide].image})` }}>
          <div className="hero-content">
            <h1>{slides[currentSlide].title}</h1>
            <p>{slides[currentSlide].description}</p>
            <button className="cta-button" onClick={handleShopNowClick}>Shop Now</button>
          </div>
        </div>
      </header>

      {/* Promo Section */}
      <section className="promo-section">
        <div className="promo-card new-arrivals">
          <h3>New Arrivals</h3>
          <p>Check out the latest tech gadgets now!</p>
        </div>
        <div className="promo-card limited-time">
          <h3>Limited Time Offer</h3>
          <p>Hurry up! Exclusive discounts for a limited time!</p>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
