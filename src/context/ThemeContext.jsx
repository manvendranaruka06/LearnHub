import React, { createContext, useState, useEffect } from 'react';

/**
 * 1. Create the Context
 * This creates a global store for our theme state so any component can access
 * the current theme without having to pass props down through the component tree.
 */
export const ThemeContext = createContext();

/**
 * 2. ThemeProvider Component
 * Wraps our application and manages the actual state of the theme.
 */
export const ThemeProvider = ({ children }) => {
  // Initialize state lazily by checking localStorage or system preferences
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if the user previously saved a theme preference in their browser
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // If no saved preference, check their OS-level preferred color scheme
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // 3. Side Effect for DOM updates and Persistence
  // This hook runs every time `isDarkMode` changes.
  useEffect(() => {
    if (isDarkMode) {
      // Add the 'dark' class to the root <html> element (required by Tailwind)
      document.documentElement.classList.add('dark');
      // Save their preference to localStorage
      localStorage.setItem('theme', 'dark');
    } else {
      // Remove the 'dark' class for light mode
      document.documentElement.classList.remove('dark');
      // Update localStorage
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Helper function to easily toggle the state
  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  // 4. Provide the state to the rest of the application
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
