
import { Link } from 'react-router-dom';

function PostCard({ id, title, excerpt, author, date }) {
  return (
    <article className="post-card">
      <h3>
        <Link to={`/posts/${id}`}>{title}</Link>
      </h3>

      <p>{excerpt}</p>

      <div className="post-meta">
        <span>By {author}</span>
        <span>{date}</span>
        <span>{likes} {likes === 1 ? 'like' : 'likes'}</span>
      </div>
      <div className="post-actions">
        <button type="button" onClick={onLike}>
          {liked ? 'Unlike' : 'Like'}
        </button>
        <button type="button" onClick={onDelete}>
          Delete
        </button>
      </div>

      <Link to={`/posts/${id}`}>Read more</Link>
    </article>
  );
}

export default PostCard;
