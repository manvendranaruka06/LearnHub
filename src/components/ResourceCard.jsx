import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ExternalLink } from 'lucide-react';
import { FavoritesContext } from '../context/FavoritesContext';

const ResourceCard = ({ resource }) => {
  const { isFavorite, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const favorite = isFavorite(resource.id);

  const toggleFavorite = (e) => {
    e.preventDefault();
    if (favorite) {
      removeFavorite(resource.id);
    } else {
      addFavorite(resource);
    }
  };

  return (
    <div className="glass-card flex flex-col h-full overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
      <div className="relative h-48 w-full overflow-hidden bg-slate-200 dark:bg-slate-700">
        {resource.image ? (
          <img
            src={resource.image}
            alt={resource.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-500 font-medium">
            No Image
          </div>
        )}
        <button
          onClick={toggleFavorite}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800 transition-colors shadow-sm"
          aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            className={`w-5 h-5 ${favorite ? 'fill-red-500 text-red-500' : 'text-slate-600 dark:text-slate-300'}`}
          />
        </button>
        <div className="absolute bottom-3 left-3">
          <span className="px-2 py-1 text-xs font-semibold bg-white/90 dark:bg-slate-800/90 text-primary rounded shadow-sm backdrop-blur-md">
            {resource.category}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 line-clamp-2">
          {resource.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 flex-grow">
          {resource.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <Link
            to={`/resource/${resource.id}`}
            className="text-primary hover:text-primary-dark font-medium text-sm transition-colors"
          >
            View Details
          </Link>
          {resource.url && (
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              Visit <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
