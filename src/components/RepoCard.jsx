import React, { useContext } from 'react';
import { Star, GitFork, Code2, Heart, Github, ExternalLink } from 'lucide-react';
import { FavoritesContext } from '../context/FavoritesContext';

/**
 * RepoCard Component
 * Displays a responsive, glassmorphism-styled card tailored for GitHub repositories.
 * 
 * @param {Object} repo - The repository data object
 */
const RepoCard = ({ repo }) => {
  const { isFavorite, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const favorite = isFavorite(repo.id);

  const toggleFavorite = (e) => {
    e.preventDefault();
    if (favorite) {
      removeFavorite(repo.id);
    } else {
      addFavorite(repo);
    }
  };

  // Helper to format large numbers for stars and forks
  const formatNumber = (num) => {
    if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
    return num;
  };

  return (
    <div className="glass-card flex flex-col h-full overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
      
      {/* Header Section */}
      <div className="p-5 pb-3 flex items-start justify-between border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="flex items-center gap-3 overflow-hidden">
          {repo.avatar ? (
            <img 
              src={repo.avatar} 
              alt={repo.owner} 
              className="w-10 h-10 rounded-full shadow-sm bg-white"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
              <Github className="w-6 h-6 text-slate-500" />
            </div>
          )}
          <div className="truncate">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 truncate">{repo.owner}</p>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 truncate" title={repo.title}>
              {repo.title}
            </h3>
          </div>
        </div>

        <button
          onClick={toggleFavorite}
          className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors shadow-sm ml-2 flex-shrink-0"
          aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            className={`w-5 h-5 ${favorite ? 'fill-red-500 text-red-500' : 'text-slate-400'}`}
          />
        </button>
      </div>
      
      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-3 flex-grow">
          {repo.description}
        </p>

        {/* Repository Stats */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-400 mb-5 mt-auto">
          <div className="flex items-center gap-1.5" title="Stars">
            <Star className="w-4 h-4 text-yellow-500" />
            <span>{formatNumber(repo.stars)}</span>
          </div>
          <div className="flex items-center gap-1.5" title="Forks">
            <GitFork className="w-4 h-4 text-slate-400" />
            <span>{formatNumber(repo.forks)}</span>
          </div>
          <div className="flex items-center gap-1.5" title="Language">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="truncate max-w-[100px]">{repo.language}</span>
          </div>
        </div>

        {/* Action Link */}
        <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2 bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 font-medium rounded-lg transition-colors text-sm"
          >
            <Github className="w-4 h-4" /> View Repository <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
