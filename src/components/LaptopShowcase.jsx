import React, { useState } from 'react';
import laptops from '../data/laptops.js';

const LaptopShowcase = ({ user, onNavigate, addToCart, setDefaultDashboardSection, searchQuery = '' }) => {
  const [showAllLaptops, setShowAllLaptops] = useState(false);

  const handleBuyNow = (laptop) => {
    if (!user) {
      onNavigate('login');
    } else {
      addToCart(laptop);
      if (setDefaultDashboardSection) setDefaultDashboardSection('cart');
      onNavigate('dashboard');
    }
  };

  // Filter laptops by searchQuery (case-insensitive, matches name, brand, or model)
  const filteredLaptops = searchQuery
    ? laptops.filter(laptop =>
        laptop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        laptop.brand.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : laptops;

  // Show only first 6 laptops initially, or all if showAllLaptops is true
  const displayedLaptops = showAllLaptops ? filteredLaptops : filteredLaptops.slice(0, 6);

  return (
    <section className="laptop-showcase">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Laptops</h2>
          <p className="section-subtitle">
            Discover amazing deals on premium laptops from trusted sellers.
          </p>
        </div>

        <div className="laptop-grid">
          {displayedLaptops.map((laptop) => (
            <div key={laptop.id} className="laptop-card">
              <img
                src={laptop.image}
                alt={laptop.name}
                className="laptop-image"
              />
              <div className="laptop-info">
                <h3 className="laptop-name">{laptop.name}</h3>
                <div className="laptop-footer">
                  <span className="laptop-price">
                    NPR {laptop.price.toLocaleString()}
                  </span>
                  <button className="btn-buy" onClick={() => handleBuyNow(laptop)}>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAllLaptops && (
          <button 
            className="view-all-btn" 
            onClick={() => setShowAllLaptops(true)}
          >
            View All Laptops
          </button>
        )}
      </div>
    </section>
  );
};

export default LaptopShowcase;