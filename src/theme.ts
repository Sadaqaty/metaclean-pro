import { DefaultTheme } from 'styled-components';

// Define the theme colors
export interface ThemeColors {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  secondary: string;
  accent: string;
  text: string;
  textLight: string;
  white: string;
  black: string;
  success: string;
  error: string;
  warning: string;
  errorLight: string;
  successLight: string;
  border: string;
  background: string;
  [key: string]: string; // Allow any additional color properties
}

const colors: ThemeColors = {
  primary: '#F0F9FF',    // Very plain/light blue (Sky 50) for main backgrounds
  primaryLight: '#FFFFFF', // Pure white
  primaryDark: '#BAE6FD',  // Sky 200
  secondary: '#E0F2FE',  // Sky 100
  accent: '#0284C7',     // Sky 600 - darker blue for better contrast on buttons
  text: '#0F172A',       // Slate 900 - high contrast text
  textLight: '#475569',  // Slate 600
  white: '#FFFFFF',
  black: '#000000',
  success: '#22C55E',    // Green side
  error: '#EF4444',      // Red side
  warning: '#F59E0B',    // Amber side
  errorLight: '#FEE2E2', // Red 50
  successLight: '#DCFCE7', // Green 50
  border: '#E2E8F0',     // Slate 200
  background: '#FFFFFF', // White
} as const;

// Define the complete theme
export interface ThemeInterface extends DefaultTheme {
  colors: ThemeColors;
  fonts: {
    primary: string;
    mono: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  transitions: {
    default: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
}

export const theme: ThemeInterface = {
  colors,
  fonts: {
    primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: '"Fira Code", "Courier New", monospace',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  transitions: {
    default: 'all 0.2s ease-in-out',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '9999px',
  },
};
