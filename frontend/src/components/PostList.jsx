import { useState } from 'react';
import PostCard from './PostCard';
import { searchPosts } from '../utils/posts';

function PostList({ posts, onLike, onDelete }) {
  const [query, setQuery] = useState('');
  const visiblePosts = searchPosts(posts, query);

  return (
    <section className="post-list">
      <h2>Community Feed</h2>

      <label htmlFor="post-search">Search posts</label>
      <input
        id="post-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search by title or author"
      />

      {posts.length === 0 ? (
        <p>No posts yet. Be the first to share something!</p>
      ) : visiblePosts.length === 0 ? (
        <p>No posts match that search.</p>
      ) : (
        visiblePosts.map((post) => (
          <PostCard
            key={post.id || index}
            id={post.id}
            title={post.title}
            excerpt={post.excerpt}
            author={post.author}
            date={post.date}
            likes={post.likes}
            liked={post.liked}
            onLike={() => onLike(post.id)}
            onDelete={() => onDelete(post.id)}
          />
        ))
      )}
    </section>
  );
}

export default PostList;
