import PostCard from "./PostCard";
import styles from "./Post.module.css";

function PostList({ posts, onLike }) {
  if (posts.length === 0) {
    return <p>No posts found.</p>;
  }

  return (
    <div className={styles.list}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onLike={onLike} />
      ))}
    </div>
  );
}

export default PostList;
