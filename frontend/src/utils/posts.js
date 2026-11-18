
export function filterPosts(posts = [], searchTerm = '') {
  const normalizedSearch = searchTerm.trim().toLowerCase();

  return posts.filter((post) => {
    const title = (post.title || '').toLowerCase();
    const excerpt = (post.excerpt || '').toLowerCase();
    const author = (post.author || '').toLowerCase();

    return (
      title.includes(normalizedSearch) ||
      excerpt.includes(normalizedSearch) ||
      author.includes(normalizedSearch)
    );
  });
}
