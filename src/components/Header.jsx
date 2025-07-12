import React, { useState } from 'react';
import { Search, User, Menu, X, Laptop } from 'lucide-react';

const Header = ({ onNavigate, user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="header">
      <div className="header-container">
        <a href="#" className="logo" onClick={() => onNavigate('home')}>
          <Laptop size={32} />
          <span>LaptopHub</span>
        </a>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search laptops, brands, models..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <Search className="search-icon" size={20} />
        </div>

        <nav className="nav-links">
          <a href="#" onClick={() => onNavigate('home')}>Home</a>
          <a href="#" onClick={() => onNavigate('about')}>About</a>
          {user && (
            <a href="#" onClick={() => onNavigate('dashboard')}>Dashboard</a>
          )}
        </nav>

        <div className="auth-buttons">
          {user ? (
            <div className="user-menu">
              <span className="user-name">Hi, {user.name}</span>
              <button 
                className="btn btn-logout"
                onClick={() => {
                  // Clear user and go to home
                  window.location.reload();
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <button 
                className="btn btn-login"
                onClick={() => onNavigate('login')}
              >
                Login
              </button>
              <button 
                className="btn btn-register"
                onClick={() => onNavigate('register')}
              >
                Register
              </button>
            </>
          )}
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="mobile-menu-btn"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;