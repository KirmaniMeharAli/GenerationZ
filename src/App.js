import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import Shop from './components/Shop';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';
import Footer from './components/Footer';
import Account from './components/Account';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Contact from './components/Contact';
import ProductDetails from './components/ProductDetails';
import UserProfile from './components/UserProfile';
import OrderHistory from './components/OrderHistory';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route 
          path="/checkout" 
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/order-confirmation" 
          element={
            <PrivateRoute>
              <OrderConfirmation />
            </PrivateRoute>
          } 
        />
        <Route path="/account" element={<Account />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route 
          path="/profile" 
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/order-history" 
          element={
            <PrivateRoute>
              <OrderHistory />
            </PrivateRoute>
          } 
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;