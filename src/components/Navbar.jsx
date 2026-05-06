import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Heart } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import { FavoritesContext } from '../context/FavoritesContext';

const Navbar = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <nav className="glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                Learn<span className="text-primary">Hub</span>
              </span>
            </Link>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <DarkModeToggle />
            <Link
              to="/favorites"
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-200"
            >
              <div className="relative">
                <Heart className="h-5 w-5" />
                {favorites.length > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                    {favorites.length}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline font-medium text-sm">Favorites</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
