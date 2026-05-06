const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

/**
 * Helper to format view counts (e.g., 1500000 -> 1.5M)
 */
const formatViews = (views) => {
  if (!views) return '0 views';
  const num = parseInt(views, 10);
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M views';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K views';
  return num + ' views';
};

/**
 * Fetch videos from YouTube API based on a search query.
 * It first searches for videos, then fetches statistics (like views) for those specific videos.
 * 
 * @param {string} query - The search term
 * @returns {Promise<Array>} Array of formatted video objects
 */
export const searchYouTubeVideos = async (query) => {
  if (!query) return [];
  if (!API_KEY) {
    console.error("YouTube API Key is missing!");
    throw new Error("YouTube API key is missing. Please check your .env file.");
  }

  try {
    // Step 1: Search for videos related to the query
    const searchRes = await fetch(
      `${BASE_URL}/search?part=snippet&maxResults=6&q=${encodeURIComponent(query)}&type=video&key=${API_KEY}`
    );
    
    if (!searchRes.ok) {
      const errorData = await searchRes.json();
      throw new Error(errorData.error?.message || `YouTube Search API error: ${searchRes.status}`);
    }
    
    const searchData = await searchRes.json();
    
    if (!searchData.items || searchData.items.length === 0) {
      return [];
    }

    // Extract video IDs to fetch statistics
    const videoIds = searchData.items.map(item => item.id.videoId).join(',');

    // Step 2: Fetch detailed statistics (views) for these videos
    const statsRes = await fetch(
      `${BASE_URL}/videos?part=statistics,snippet&id=${videoIds}&key=${API_KEY}`
    );

    if (!statsRes.ok) {
      throw new Error(`YouTube Videos API error: ${statsRes.status}`);
    }

    const statsData = await statsRes.json();
    
    // Step 3: Map and combine the data into a clean structure
    return statsData.items.map(video => ({
      id: `yt-${video.id}`,
      originalId: video.id,
      type: 'youtube', // explicitly mark as youtube
      title: video.snippet.title,
      description: video.snippet.description,
      channelName: video.snippet.channelTitle,
      publishDate: video.snippet.publishedAt,
      views: formatViews(video.statistics.viewCount),
      url: `https://www.youtube.com/watch?v=${video.id}`,
      image: video.snippet.thumbnails?.high?.url || video.snippet.thumbnails?.medium?.url,
      category: 'YouTube Video' // maintain compatibility with existing FilterBar
    }));
    
  } catch (error) {
    console.error("Failed to fetch YouTube videos:", error);
    throw error; // Rethrow to be handled by the caller
  }
};
