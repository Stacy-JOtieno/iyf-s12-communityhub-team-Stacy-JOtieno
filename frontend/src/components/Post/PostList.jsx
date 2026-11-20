import PostCard from "./PostCard";
import styles from "./Post.module.css";

function PostList({ posts }) {
  if (posts.length === 0) {
    return <p>No posts found.</p>;
  }

  return (
    <div className={styles.list}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
