/**
 * Fetches repositories from GitHub API based on the query.
 * 
 * @param {string} query - The search query.
 * @returns {Promise<Array>} Array of formatted repository objects.
 */
export const searchGithubRepos = async (query) => {
  if (!query) return [];
  try {
    const response = await fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&per_page=6`);
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    const data = await response.json();
    
    // Map the GitHub repository data to match our application structure
    return (data.items || []).map(repo => {
      // Determine difficulty level deterministically based on repository ID
      const levels = ['Beginner', 'Intermediate', 'Advanced'];
      const assignedLevel = levels[repo.id % 3];

      return {
        id: `gh-${repo.id}`,
        originalId: repo.id,
        type: 'github',
        title: repo.name,
        description: repo.description || 'No description available.',
        category: 'GitHub Repository',
        url: repo.html_url,
        owner: repo.owner.login,
        avatar: repo.owner.avatar_url,
        stars: repo.stargazers_count,
        rawStars: repo.stargazers_count, // Keeping raw number for sorting
        forks: repo.forks_count,
        language: repo.language || 'Multiple',
        publishDate: repo.updated_at, // Use updated_at for sorting by latest
        level: assignedLevel
      };
    });
  } catch (error) {
    console.error("Failed to fetch from GitHub:", error);
    throw error; // Rethrow to be handled by the caller
  }
};
