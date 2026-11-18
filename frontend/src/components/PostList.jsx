
import PostCard from './PostCard';

function PostList({ posts }) {
  return (
    <section className="post-list">
      <h2>Community Feed</h2>

      {posts.length === 0 ? (
        <p>No posts yet. Be the first to share something!</p>
      ) : (
        posts.map((post, index) => (
          <PostCard
            key={index}
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
