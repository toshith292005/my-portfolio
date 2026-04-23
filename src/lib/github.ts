export async function getRepoStats(repoName: string) {
  try {
    const res = await fetch(`https://api.github.com/repos/${repoName}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    
    if (!res.ok) return null;
    
    const data = await res.json();
    return {
      stars: data.stargazers_count,
      forks: data.forks_count,
      updatedAt: data.updated_at,
    };
  } catch (error) {
    console.error(`Error fetching stats for ${repoName}:`, error);
    return null;
  }
}
