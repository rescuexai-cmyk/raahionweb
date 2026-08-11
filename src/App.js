import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Suggestions from './components/Suggestions';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LazyMount from './components/LazyMount';

const Features = lazy(() => import('./components/Features'));
const FAQ = lazy(() => import('./components/FAQ'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Blogs = lazy(() => import('./pages/Blogs'));
const Career = lazy(() => import('./pages/Career'));
const Contact = lazy(() => import('./pages/Contact'));
const TrustSafety = lazy(() => import('./pages/TrustSafety'));
const Terms = lazy(() => import('./pages/Terms'));
const Privacy = lazy(() => import('./pages/Privacy'));

export const BookingContext = React.createContext();

function HomePage({ selectedService, setSelectedService }) {
  return (
    <>
      <Hero />
      <Suggestions selectedService={selectedService} setSelectedService={setSelectedService} />
      <LazyMount minHeight={900} rootMargin="300px 0px">
        <Suspense fallback={null}>
          <Features />
        </Suspense>
      </LazyMount>
      <LazyMount minHeight={400} rootMargin="300px 0px">
        <Suspense fallback={null}>
          <FAQ />
        </Suspense>
      </LazyMount>
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
            <Suspense fallback={null}>
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
            </Suspense>
          </main>
          <Footer />
        </div>
      </BookingContext.Provider>
    </Router>
    </LanguageProvider>
  );
}

export default App;
