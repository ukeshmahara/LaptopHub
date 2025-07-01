import React, { useState } from 'react';
import Header from './components/Header';
import HeroSlideshow from './components/HeroSlideshow';
import LaptopShowcase from './components/LaptopShowcase';
import FeaturesSection from './components/FeaturesSection';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import RegisterPage from './components/RegisterPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'register':
        return <RegisterPage onNavigate={setCurrentPage} />;
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