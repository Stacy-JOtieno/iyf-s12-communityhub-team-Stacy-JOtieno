export function sortNewestFirst(posts) {
  return [...posts].sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
}

export function searchPosts(posts, query) {
  const term = query.trim().toLowerCase();

  if (!term) {
    return posts;
  }

  return posts.filter((post) => {
    const title = post.title.toLowerCase();
    const author = post.author.toLowerCase();
    return title.includes(term) || author.includes(term);
  });
}
