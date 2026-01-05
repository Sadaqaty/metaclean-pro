import 'styled-components';

// Define the complete theme interface
export interface ThemeType {
  colors: {
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
  };
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
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
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
      [key: string]: string;
    };
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
}
