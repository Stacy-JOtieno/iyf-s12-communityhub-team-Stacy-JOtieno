function PostCard({
  title,
  excerpt,
  author,
  date,
  likes = 0,
  liked = false,
  onLike,
  onDelete,
}) {
  return (
    <article className="post-card">
      <h3>{title}</h3>
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
    </article>
  );
}

export default PostCard;