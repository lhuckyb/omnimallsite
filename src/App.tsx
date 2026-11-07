import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { PageTransition } from './components/layout/PageTransition';
import { BackToTop } from './components/ui/BackToTop';

import { HomePage } from './pages/HomePage';
import { MarketplacePage } from './pages/MarketplacePage';
import { SellPage } from './pages/SellPage';
import { ServicesPage } from './pages/ServicesPage';
import { ExplorePage } from './pages/ExplorePage';
import { AboutPage } from './pages/AboutPage';
import { CampusesPage } from './pages/CampusesPage';
import { HelpPage } from './pages/HelpPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { CookiesPage } from './pages/LegalPages';
import { NotFoundPage } from './pages/NotFoundPage';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/marketplace" element={<PageTransition><MarketplacePage /></PageTransition>} />
        <Route path="/sell" element={<PageTransition><SellPage /></PageTransition>} />
        <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/explore" element={<PageTransition><ExplorePage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/campuses" element={<PageTransition><CampusesPage /></PageTransition>} />
        <Route path="/help" element={<PageTransition><HelpPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="/privacy" element={<PageTransition><PrivacyPolicyPage /></PageTransition>} />
        <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicyPage /></PageTransition>} />
        <Route path="/terms" element={<PageTransition><TermsPage /></PageTransition>} />
        <Route path="/terms-and-conditions" element={<PageTransition><TermsPage /></PageTransition>} />
        <Route path="/cookies" element={<PageTransition><CookiesPage /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell min-h-screen flex flex-col bg-white text-[#202124]">
        <ScrollToTop />
        <Navbar />
        <main id="main-content" className="app-main flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
}
