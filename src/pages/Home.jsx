import React, { useState, useEffect, useMemo } from 'react';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import ResourceCard from '../components/ResourceCard';
import VideoCard from '../components/VideoCard';
import RepoCard from '../components/RepoCard';
import Loader from '../components/Loader';
import { searchResources } from '../services/api';
import useDebounce from '../hooks/useDebounce';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 600);
  
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await searchResources(debouncedSearchQuery);
        setResources(data);
      } catch (err) {
        console.error('Error fetching resources:', err);
        setError('Failed to load resources. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [debouncedSearchQuery]);

  const categories = useMemo(() => {
    const cats = new Set(resources.map(r => r.category));
    return Array.from(cats);
  }, [resources]);

  const filteredResources = useMemo(() => {
    return resources.filter(resource => {
      return selectedCategory === 'All' || resource.category === selectedCategory;
    });
  }, [resources, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
          Discover the Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Learning Resources</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Type to search real-time for courses, YouTube videos, and GitHub repositories to level up your skills.
        </p>
      </div>

      <div className="mb-10 space-y-6">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        {!loading && !error && categories.length > 0 && (
          <FilterBar 
            categories={categories} 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
          />
        )}
      </div>

      {loading ? (
        <Loader />
      ) : error ? (
        <div className="text-center py-20 glass-card">
          <p className="text-xl text-red-500 dark:text-red-400 font-medium">{error}</p>
          <button 
            onClick={() => setSearchQuery('')}
            className="mt-4 text-primary hover:underline font-medium"
          >
            Clear Search
          </button>
        </div>
      ) : filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredResources.map(resource => {
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
        <div className="text-center py-20 glass-card">
          <p className="text-xl text-slate-600 dark:text-slate-400">No resources found for "{searchQuery}".</p>
          <button 
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
            className="mt-4 text-primary hover:underline font-medium"
          >
            Clear Search and Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
