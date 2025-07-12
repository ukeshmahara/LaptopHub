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

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);

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