import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContext';
import ResourceCard from '../components/ResourceCard';
import { Heart } from 'lucide-react';

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-10 border-b border-slate-200 dark:border-slate-800 pb-6 flex items-center gap-3">
        <Heart className="w-8 h-8 text-red-500 fill-red-500" />
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Your Favorites</h1>
      </div>

      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {favorites.map(resource => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 glass-card">
          <Heart className="w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-2">No favorites yet</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-6">Start exploring and save resources you want to keep for later.</p>
          <Link to="/" className="btn-primary">
            Explore Resources
          </Link>
        </div>
      )}
    </div>
  );
};

export default Favorites;
