import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContext';
import ResourceCard from '../components/ResourceCard';
import VideoCard from '../components/VideoCard';
import RepoCard from '../components/RepoCard';
import { Heart, HeartCrack } from 'lucide-react';

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div className="flex items-center justify-center gap-3 mb-12 animate-in slide-in-from-top-4 duration-500">
        <Heart className="w-8 h-8 text-red-500 fill-red-500" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">Your Favorites</h1>
      </div>

      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 animate-in fade-in duration-700">
          {favorites.map(resource => {
            if (resource.type === 'youtube') {
              return <VideoCard key={resource.id} video={resource} />;
            }
            if (resource.type === 'github') {
              return <RepoCard key={resource.id} repo={resource} />;
            }
            return <ResourceCard key={resource.id} resource={resource} />;
          })}
        </div>
      ) : (
        <div className="text-center py-24 glass-card flex flex-col items-center justify-center animate-in fade-in duration-500 border-dashed border-2 border-slate-300 dark:border-slate-700">
          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-full mb-6">
            <HeartCrack className="w-12 h-12 text-red-400 dark:text-red-500" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">No favorites yet</h3>
          <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto">
            You haven't added any resources to your favorites. Start exploring and save the best ones for later!
          </p>
          <Link to="/" className="btn-primary">
            Discover Resources
          </Link>
        </div>
      )}
    </div>
  );
};

export default Favorites;
