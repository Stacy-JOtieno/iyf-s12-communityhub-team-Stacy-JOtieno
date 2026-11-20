import { Link, useParams } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import ErrorMessage from "../components/shared/ErrorMessage";
import styles from "../components/Post/Post.module.css";

function PostDetail() {
  const { id: postId } = useParams();
  const { posts, loading, error, reload, toggleLike } = usePosts();
  const post = posts.find((item) => String(item.id) === postId);

  return (
    <article className={styles.detail}>
      <p>
        <Link to="/posts">Back to posts</Link>
      </p>
      {loading && !post && <LoadingSpinner text="Loading post..." />}
      {error && !post && <ErrorMessage message={error} onRetry={reload} />}
      {!loading && !post && <p>That post could not be found.</p>}
      {post && (
        <>
          <h1>{post.title}</h1>
          <p className={styles.meta}>By {post.author}</p>
          <p>{post.body}</p>
          <button
            type="button"
            className={styles.like}
            aria-pressed={post.liked}
            onClick={() => toggleLike(post.id)}
          >
            {post.liked ? "Unlike" : "Like"} ({post.likes})
          </button>
        </>
      )}
    </article>
  );
}

export default PostDetail;
