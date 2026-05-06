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
    return (data.items || []).map(repo => ({
      id: `gh-${repo.id}`,
      originalId: repo.id,
      type: 'github', // explicitly mark as github
      title: repo.name,
      description: repo.description || 'No description available.',
      category: 'GitHub Repository',
      url: repo.html_url,
      owner: repo.owner.login,
      avatar: repo.owner.avatar_url,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language || 'Multiple'
    }));
  } catch (error) {
    console.error("Failed to fetch from GitHub:", error);
    throw error; // Rethrow to be handled by the caller
  }
};
