import React from 'react';
import { Search } from 'lucide-react';

/**
 * SearchBar Component
 * 
 * This is a controlled component, meaning its value is controlled by the parent's state.
 * When the user types, it calls `setSearchQuery` to update the parent state.
 */
const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Search Icon positioned inside the input */}
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-slate-400" />
      </div>
      
      {/* Search Input Field */}
      <input
        type="text"
        className="input-field pl-10 py-3 text-lg"
        placeholder="Search GitHub repos & YouTube videos..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update state on every keystroke
      />
    </div>
  );
};

export default SearchBar;
