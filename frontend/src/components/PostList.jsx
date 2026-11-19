
import { useState } from 'react';
import PostCard from './PostCard';
import { filterPosts } from '../utils/posts';

function PostList({ posts = [] }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = filterPosts(posts, searchTerm);

  return (
    <section className="post-list">
      <h2>Community Feed</h2>

      <input
        type="text"
        aria-label="Search community posts"
        placeholder="Search by title, content or author..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className="search-input"
      />

      {posts.length === 0 ? (
        <p>No posts yet. Be the first to share something!</p>
      ) : filteredPosts.length === 0 ? (
        <p>No matching posts found. Try another search.</p>
      ) : (
        filteredPosts.map((post, index) => (
          <PostCard
            key={post.id || index}
            id={post.id}
            title={post.title}
            excerpt={post.excerpt}
            author={post.author}
            date={post.date}
          />
        ))
      )}
    </section>
  );
}

export default PostList;
