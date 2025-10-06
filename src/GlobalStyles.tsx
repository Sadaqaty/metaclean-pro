import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.fonts.primary};
    background-color: ${theme.colors.primary};
    color: ${theme.colors.text};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: ${theme.colors.text};
  }

  h1 {
    font-size: 2.5rem;
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: 3rem;
    }
  }

  h2 {
    font-size: 2rem;
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: 2.5rem;
    }
  }

  h3 {
    font-size: 1.75rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  a {
    color: ${theme.colors.accent};
    text-decoration: none;
    transition: ${theme.transitions.default};
    
    &:hover {
      color: darken(${theme.colors.accent}, 15%);
    }
  }

  button, input, textarea, select {
    font: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;
