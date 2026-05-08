import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

/**
 * DarkModeToggle Component
 * This button lets the user switch between light and dark themes.
 * It consumes the ThemeContext to get the current state and the toggle function.
 */
const DarkModeToggle = () => {
  // 1. Consume the Context
  // We grab `isDarkMode` to know which icon to show, and `toggleDarkMode` to trigger the change.
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleDarkMode}
      className="btn-icon"
      aria-label="Toggle Dark Mode"
    >
      {/* 2. Conditional Rendering based on state */}
      {isDarkMode ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700" />
      )}
    </button>
  );
};

export default DarkModeToggle;
