import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Heart } from 'lucide-react';
import { getResourceById } from '../services/api';
import Loader from '../components/Loader';
import { FavoritesContext } from '../context/FavoritesContext';

const ResourceDetails = () => {
  const { id } = useParams();
  const [resource, setResource] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const { isFavorite, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const favorite = resource ? isFavorite(resource.id) : false;

  useEffect(() => {
    const fetchResource = async () => {
      setLoading(true);
      try {
        const data = await getResourceById(id);
        setResource(data);
      } catch (error) {
        console.error('Error fetching resource details:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchResource();
  }, [id]);

  const toggleFavorite = () => {
    if (!resource) return;
    if (favorite) {
      removeFavorite(resource.id);
    } else {
      addFavorite(resource);
    }
  };

  if (loading) return <Loader />;

  if (!resource) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Resource Not Found</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8">The resource you are looking for does not exist or has been removed.</p>
        <Link to="/" className="btn-primary">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-6 font-medium">
        <ArrowLeft className="w-4 h-4" /> Back to Resources
      </Link>

      <div className="glass-card overflow-hidden">
        <div className="h-64 sm:h-80 md:h-96 w-full relative bg-slate-200 dark:bg-slate-800">
          {resource.image && (
            <img 
              src={resource.image} 
              alt={resource.title} 
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <span className="px-3 py-1 text-sm font-semibold bg-primary text-white rounded-full mb-3 inline-block shadow-sm">
              {resource.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {resource.title}
            </h1>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start gap-4 mb-8">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
              {resource.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button 
                onClick={toggleFavorite}
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors border ${
                  favorite 
                    ? 'border-red-200 bg-red-50 text-red-600 hover:bg-red-100 dark:border-red-900/50 dark:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-500/20' 
                    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                <Heart className={`w-5 h-5 ${favorite ? 'fill-current' : ''}`} />
                {favorite ? 'Saved' : 'Save'}
              </button>
              
              {resource.url && (
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  Visit Resource <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
          
          <div className="border-t border-slate-200 dark:border-slate-700 pt-8 mt-8">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">About this resource</h3>
            <p className="text-slate-600 dark:text-slate-400">
              This is a comprehensive resource curated for developers and designers to improve their skills in {resource.category.toLowerCase()}. Click the button above to visit the official content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetails;
