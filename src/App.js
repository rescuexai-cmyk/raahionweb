import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Suggestions from './components/Suggestions';
import Features from './components/Features';
import FranchiseSection from './components/FranchiseSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AboutUs from './pages/AboutUs';
import Blogs from './pages/Blogs';
import Career from './pages/Career';
import Contact from './pages/Contact';
import TrustSafety from './pages/TrustSafety';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

export const BookingContext = React.createContext();

function HomePage({ selectedService, setSelectedService }) {
  return (
    <>
      <Hero />
      <Suggestions selectedService={selectedService} setSelectedService={setSelectedService} />
      <Features />
      <FranchiseSection />
      <FAQ />
    </>
  );
}

function App() {
  const [selectedService, setSelectedService] = useState('rescue');

  return (
    <LanguageProvider>
    <Router>
      <ScrollToTop />
      <BookingContext.Provider value={{ selectedService, setSelectedService }}>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route 
                path="/" 
                element={
                  <HomePage 
                    selectedService={selectedService} 
                    setSelectedService={setSelectedService} 
                  />
                } 
              />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/career" element={<Career />} />
              <Route path="/help" element={<Contact />} />
              <Route path="/safety" element={<TrustSafety />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BookingContext.Provider>
    </Router>
    </LanguageProvider>
  );
}

export default App;
