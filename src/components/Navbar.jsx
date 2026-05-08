import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Sparkles, Home } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isFavoritesPage = location.pathname === '/favorites';

  return (
    <nav className="glass-nav py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo and Branding */}
        <div className="flex items-center gap-2.5 group cursor-default">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            LearnHub <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">AI</span>
          </span>
        </div>

        {/* Navigation Links and Actions */}
        <div className="flex items-center gap-3 sm:gap-5">
          <Link 
            to="/" 
            className={`btn-icon flex items-center gap-2 ${isHomePage ? 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400' : 'text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400'}`}
            title="Home"
          >
            <Home className={`w-5 h-5 ${isHomePage ? 'text-blue-600 dark:text-blue-400' : ''}`} />
            <span className="hidden sm:inline font-semibold text-sm">Home</span>
          </Link>

          <Link 
            to="/favorites" 
            className={`btn-icon flex items-center gap-2 ${isFavoritesPage ? 'bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400' : 'text-slate-600 hover:text-red-600 dark:text-slate-300 dark:hover:text-red-400'}`}
            title="Favorites"
          >
            <Heart className={`w-5 h-5 ${isFavoritesPage ? 'fill-red-500' : ''}`} />
            <span className="hidden sm:inline font-semibold text-sm">Favorites</span>
          </Link>
          
          <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>
          
          <DarkModeToggle />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
