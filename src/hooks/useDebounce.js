import { useState, useEffect } from 'react';

/**
 * Custom hook to debounce a value.
 * This is useful for preventing excessive API calls when a user is typing in a search input.
 * It waits for the specified delay after the user stops typing before updating the value.
 * 
 * @param {any} value - The value to debounce (e.g., search query string).
 * @param {number} delay - The delay in milliseconds to wait.
 * @returns {any} The debounced value.
 */
function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );

  return debouncedValue;
}

export default useDebounce;
