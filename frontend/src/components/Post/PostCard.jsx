import { Link } from "react-router-dom";
import styles from "./Post.module.css";

function PostCard({ post, onLike }) {
  const excerpt = post.body.length > 140 ? `${post.body.slice(0, 140)}...` : post.body;

  return (
    <article className={styles.card}>
      <h2>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h2>
      <p>{excerpt}</p>
      <p className={styles.meta}>By {post.author}</p>
      {onLike && (
        <button
          type="button"
          className={styles.like}
          aria-pressed={post.liked}
          onClick={() => onLike(post.id)}
        >
          {post.liked ? "Unlike" : "Like"} ({post.likes})
        </button>
      )}
    </article>
  );
}

export default PostCard;
