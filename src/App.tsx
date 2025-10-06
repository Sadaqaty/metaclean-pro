import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { theme } from './theme';
import {
  Header,
  Hero,
  Features,
  HowItWorks,
  Faq,
  Contact,
  Footer,
  SecurityBadges,
  FileUpload,
} from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="app">
        <Header />
        <main>
          <Hero />
          <FileUpload />
          <Features />
          <HowItWorks />
          <SecurityBadges />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
