
import { useParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function PostDetail() {
  const { id } = useParams();

  const {
    data: post,
    loading,
    error,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (loading) {
    return <p role="status">Loading post...</p>;
  }

  if (error) {
    return <p role="alert">Sorry, we could not load this post.</p>;
  }

  if (!post || !post.title) {
    return <p>Post not found.</p>;
  }

  return (
    <article className="post-detail">
      <Link to="/posts">← Back to Posts</Link>

      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>Author: Community Member {post.userId}</p>
    </article>
  );
}

export default PostDetail;
