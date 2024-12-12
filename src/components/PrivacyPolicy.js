// src/components/PrivacyPolicy.js
import React from 'react';
import './PrivacyPolicy.css'; // Import the PrivacyPolicy specific CSS

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-title">Privacy Policy</h1>
      <p className="privacy-policy-introduction">
        Welcome to our Privacy Policy page! We value your privacy and strive to protect your personal information. Please read the following details to understand how we handle your data.
      </p>

      <h2 className="section-title">1. Information We Collect</h2>
      <p>
        We collect personal information like your name, email address, and payment details when you create an account or make a purchase. This information is used to process orders and provide a personalized experience.
      </p>

      <h2 className="section-title">2. How We Use Your Information</h2>
      <p>
        The information we collect is used to process your transactions, improve our services, and communicate with you regarding your account and orders. We may also send promotional emails with your consent.
      </p>

      <h2 className="section-title">3. Data Protection</h2>
      <p>
        We take appropriate measures to protect your personal information from unauthorized access or misuse. We use secure encryption protocols to handle sensitive data like passwords and payment information.
      </p>

      <h2 className="section-title">4. Sharing Your Information</h2>
      <p>
        We do not sell or share your personal data with third parties unless required for order fulfillment or to comply with the law.
      </p>

      <h2 className="section-title">5. Your Rights</h2>
      <p>
        You have the right to access, modify, or delete your personal information at any time by contacting us. You can also unsubscribe from our marketing communications.
      </p>

      <h2 className="section-title">6. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, feel free to contact us at privacy@GenerationZ.com.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
