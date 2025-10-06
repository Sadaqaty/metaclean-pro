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
  primary: '#F8FAB4',    // ButterCream
  primaryLight: '#FCFDD8', // Lighter version of primary
  primaryDark: '#F5F890',  // Darker version of primary
  secondary: '#FEE2AD',  // PeachCream
  accent: '#FFC7A7',     // SalmonPink
  text: '#2D3748',       // Dark gray for text
  textLight: '#4A5568',  // Lighter gray for secondary text
  white: '#FFFFFF',
  black: '#000000',
  success: '#48BB78',    // Green for success messages
  error: '#F56565',      // Red for errors
  warning: '#ED8936',    // Orange for warnings
  errorLight: '#FED7D7', // Light red for error backgrounds
  successLight: '#C6F6D5', // Light green for success backgrounds
  border: '#E2E8F0',     // Default border color
  background: '#F7FAFC', // Default background color
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
