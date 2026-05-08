import { searchYouTubeVideos } from './youtubeApi';
import { searchGithubRepos } from './githubApi';

// Dummy default resources if search is empty
export const defaultResources = [
  {
    id: 'default-1',
    title: 'React for Beginners',
    description: 'A comprehensive guide to learning React from scratch. Covers components, state, props, and hooks.',
    category: 'Development',
    url: 'https://react.dev',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop',
    type: 'article',
    level: 'Beginner',
    rawViews: 1000,
    rawStars: 500,
    publishDate: new Date('2023-01-01').toISOString()
  },
  {
    id: 'default-2',
    title: 'Advanced Tailwind CSS Techniques',
    description: 'Learn how to build complex layouts and custom designs using Tailwind CSS utility classes.',
    category: 'Design',
    url: 'https://tailwindcss.com',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop',
    type: 'article',
    level: 'Advanced',
    rawViews: 800,
    rawStars: 1500,
    publishDate: new Date('2023-06-15').toISOString()
  }
];

// Existing dummy functions for backward compatibility
export const getResources = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(defaultResources);
    }, 800);
  });
};

export const getResourceById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(defaultResources.find((r) => r.id === id) || null);
    }, 500);
  });
};

/**
 * Main search function that fetches from GitHub and the actual YouTube API.
 * @param {string} query - The search query.
 */
export const searchResources = async (query) => {
  if (!query || query.trim() === '') {
    return defaultResources;
  }

  // Fetch concurrently
  const [githubResults, youtubeResults] = await Promise.all([
    searchGithubRepos(query).catch(err => {
      console.error("GitHub Fetch failed in searchResources:", err);
      return []; // Return empty if GitHub fails
    }),
    searchYouTubeVideos(query).catch(err => {
      console.error("YouTube Fetch failed in searchResources:", err);
      return []; // Return empty if YouTube fails so GitHub still shows
    })
  ]);

  // Interleave the results
  const combined = [];
  const maxLength = Math.max(githubResults.length, youtubeResults.length);
  
  for (let i = 0; i < maxLength; i++) {
    if (youtubeResults[i]) combined.push(youtubeResults[i]);
    if (githubResults[i]) combined.push(githubResults[i]);
  }

  return combined;
};
