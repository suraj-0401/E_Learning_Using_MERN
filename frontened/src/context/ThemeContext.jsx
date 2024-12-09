import React, { useState, createContext, useContext } from "react";

// Create a Context for the theme
const ThemeContext = createContext();

// Create a Provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); 

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => {
  return useContext(ThemeContext);
};

export default ThemeProvider;