import React, { useContext } from 'react';
import { PlayCircle, Eye, Calendar, Heart, ExternalLink } from 'lucide-react';
import { FavoritesContext } from '../context/FavoritesContext';

/**
 * VideoCard Component
 * Displays a responsive, glassmorphism-styled card tailored for video content.
 * 
 * @param {Object} video - The video data object
 */
const VideoCard = ({ video }) => {
  const { isFavorite, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const favorite = isFavorite(video.id);

  const toggleFavorite = (e) => {
    e.preventDefault();
    if (favorite) {
      removeFavorite(video.id);
    } else {
      addFavorite(video);
    }
  };

  const formattedDate = new Date(video.publishDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="glass-card flex flex-col h-full overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
      
      {/* Thumbnail Section */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-900 group cursor-pointer" onClick={() => window.open(video.url, '_blank')}>
        {video.image ? (
          <img
            src={video.image}
            alt={video.title}
            className="w-full h-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-500 bg-slate-800">
            No Thumbnail
          </div>
        )}
        
        {/* Play overlay icon */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <PlayCircle className="w-12 h-12 text-white opacity-0 group-hover:opacity-90 transition-opacity duration-300 drop-shadow-lg" />
        </div>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // prevent triggering the video link
            toggleFavorite(e);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 transition-colors shadow-sm"
          aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            className={`w-5 h-5 ${favorite ? 'fill-red-500 text-red-500' : 'text-white'}`}
          />
        </button>
      </div>
      
      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1 line-clamp-2 leading-tight">
          {video.title}
        </h3>
        
        <p className="text-sm font-medium text-primary mb-3">
          {video.channelName}
        </p>

        {/* Video Statistics */}
        <div className="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400 mb-4 mt-auto">
          <div className="flex items-center gap-1.5">
            <Eye className="w-4 h-4" />
            <span>{video.views}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Action Link */}
        <div className="pt-3 mt-auto border-t border-slate-200 dark:border-slate-700/50">
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2 bg-red-50 hover:bg-red-100 dark:bg-red-500/10 dark:hover:bg-red-500/20 text-red-600 dark:text-red-400 font-medium rounded-lg transition-colors text-sm"
          >
            <PlayCircle className="w-4 h-4" /> Watch on YouTube
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
