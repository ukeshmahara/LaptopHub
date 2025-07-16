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

  const handleAdminLogin = () => {
    setAdmin({ name: 'Alice Admin', email: 'alice@admin.com' });
    setCurrentPage('admin-dashboard');
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
        return <UserDashboard onNavigate={setCurrentPage} user={user} />;
      case 'admin-dashboard':
        return <AdminDashboard onNavigate={setCurrentPage} admin={admin} />;
      case 'about':
        return (
          <div className="app">
            <Header onNavigate={setCurrentPage} user={user} />
            <HowItWorks />
            <Footer />
          </div>
        );
      default:
        return (
          <div className="app">
            <Header onNavigate={setCurrentPage} user={user} />
            <button style={{position:'absolute',top:10,right:10}} onClick={handleAdminLogin}>Admin Login (Demo)</button>
            <HeroSlideshow />
            <LaptopShowcase />
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