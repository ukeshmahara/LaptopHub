import React, { useState } from 'react';
import Header from './components/Header';
import HeroSlideshow from './components/HeroSlideshow';
import LaptopShowcase from './components/LaptopShowcase';
import FeaturesSection from './components/FeaturesSection';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  // const [currentPage, setCurrentPage] = useState('home');

  // const renderPage = () => {
  //   switch (currentPage) {
  //     case 'login':
  //       return <LoginPage onNavigate={setCurrentPage} />;
  //     case 'register':
  //       return <RegisterPage onNavigate={setCurrentPage} />;
  //     default:
  //       return (
  //         <div className="app">
  //           <Header onNavigate={setCurrentPage} />
  //           <HeroSlideshow />
  //           <LaptopShowcase />
  //           <FeaturesSection />
  //           <HowItWorks />
  //           <Footer />
  //         </div>
  //       );
  //   }
  // };

  // return renderPage();
  return (
    <div className="app">
      <Header />
      <HeroSlideshow />
      <LaptopShowcase />
      <FeaturesSection />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;