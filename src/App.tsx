import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { theme } from './theme';
import { Hero, Features, HowItWorks, Faq, SecurityBadges, FileUpload, Footer } from './components';
import { ContactPage } from './pages/ContactPage';
import CookiePolicy from './pages/CookiePolicy';
import GDPR from './pages/GDPR';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="app">

          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <FileUpload />
                <Features />
                <HowItWorks />
                <SecurityBadges />
                <Faq />
                <ContactPage />
              </main>
            } />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/gdpr" element={<GDPR />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
