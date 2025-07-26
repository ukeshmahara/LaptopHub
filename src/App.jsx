import React, { useState } from 'react';
import Header from './components/Header';
import HeroSlideshow from './components/HeroSlideshow';
import LaptopShowcase from './components/LaptopShowcase';
import FeaturesSection from './components/FeaturesSection';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [cart, setCart] = useState([]);
  const [defaultDashboardSection, setDefaultDashboardSection] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');

  const handleAdminLogin = () => {
    setAdmin({ name: 'Alice Admin', email: 'alice@admin.com' });
    setCurrentPage('admin-dashboard');
  };

  const addToCart = (laptop) => {
    setCart((prev) => {
      const found = prev.find(item => item.id === laptop.id);
      if (found) {
        return prev.map(item =>
          item.id === laptop.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...laptop, quantity: 1 }];
    });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage onNavigate={setCurrentPage} onLogin={(userData) => {
          setUser(userData);
          setCurrentPage('dashboard');
        }} />;
      case 'register':
        return <RegisterPage onNavigate={setCurrentPage} />;
      case 'dashboard':
        return <UserDashboard 
          onNavigate={setCurrentPage} 
          user={user} 
          defaultSection={defaultDashboardSection}
          cartItems={cart}
          setCartItems={setCart}
        />;
      case 'admin-dashboard':
        return <AdminDashboard onNavigate={setCurrentPage} admin={admin} />;
      case 'about':
        return (
          <div className="app">
            <Header onNavigate={setCurrentPage} user={user} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <HowItWorks />
            <Footer />
          </div>
        );
      default:
        return (
          <div className="app">
            <Header onNavigate={setCurrentPage} user={user} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <button style={{position:'absolute',top:10,right:10}} onClick={handleAdminLogin}>Admin Login (Demo)</button>
            <HeroSlideshow />
            <LaptopShowcase user={user} onNavigate={setCurrentPage} addToCart={addToCart} setDefaultDashboardSection={setDefaultDashboardSection} searchQuery={searchQuery} />
            <FeaturesSection />
            <HowItWorks />
            <Footer />
          </div>
        );
    }
  };

  return renderPage();
}

export default App;