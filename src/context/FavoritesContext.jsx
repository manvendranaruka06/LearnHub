import React, { createContext, useState, useEffect } from 'react';

/**
 * 1. Create the Context
 * We use createContext() to create a global "store" for our favorites.
 * This allows us to access favorites from ANY component without prop drilling.
 */
export const FavoritesContext = createContext();

/**
 * 2. Create the Provider Component
 * The Provider wraps around our application (in App.jsx) and "provides" the state to all its children.
 */
export const FavoritesProvider = ({ children }) => {
  // Initialize state with data from localStorage so favorites persist across page reloads
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    // If there is saved data, parse it from JSON back into an array. Otherwise, start with an empty array [].
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // 3. Persist Data Automatically
  // useEffect runs every time the 'favorites' state changes.
  // We stringify the array and save it to localStorage.
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  /**
   * Helper function to add a resource to favorites.
   * We check if it already exists to prevent duplicates.
   */
  const addFavorite = (resource) => {
    setFavorites((prev) => {
      if (!prev.find(item => item.id === resource.id)) {
        return [...prev, resource]; // Return a new array with the old items + the new one
      }
      return prev;
    });
  };

  /**
   * Helper function to remove a resource by its ID.
   * We use filter() to keep all items EXCEPT the one with the matching ID.
   */
  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter(item => item.id !== id));
  };

  /**
   * Helper function to check if an item is already a favorite.
   * Useful for UI state (e.g., coloring the heart icon red).
   */
  const isFavorite = (id) => {
    return favorites.some(item => item.id === id);
  };

  // 4. Pass the state and functions down via the value prop
  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
