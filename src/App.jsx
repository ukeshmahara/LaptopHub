import React, { useState } from 'react';
import Header from './components/Header';
import HeroSlideshow from './components/HeroSlideshow';
import LaptopShowcase from './components/LaptopShowcase';
import FeaturesSection from './components/FeaturesSection';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage onNavigate={setCurrentPage} />;
      case 'register':
        return <RegisterPage onNavigate={setCurrentPage} />;
      case 'about':
        return (
          <div className="app">
            <Header onNavigate={setCurrentPage} />
            <HowItWorks />
            <Footer />
          </div>
        );
      default:
        return (
          <div className="app">
            <Header onNavigate={setCurrentPage} />
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