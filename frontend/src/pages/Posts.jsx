
import useFetch from '../hooks/useFetch';
import PostList from '../components/PostList';

function Posts() {
  const {
    data,
    loading,
    error,
  } = useFetch('https://jsonplaceholder.typicode.com/posts');

  const posts = data.map((post) => ({
    id: post.id,
    title: post.title,
    excerpt: post.body,
    author: `Community Member ${post.userId}`,
    date: `Post #${post.id}`,
  }));

  if (loading) {
    return (
      <section className="posts-page">
        <h1>Community Posts</h1>
        <p role="status">Loading posts, please wait...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="posts-page">
        <h1>Community Posts</h1>
        <p role="alert">
          Sorry, we could not load the posts. Please check your
          internet connection and try again later.
        </p>
      </section>
    );
  }

  return (
    <section className="posts-page">
      <h1>Community Posts</h1>
      <PostList posts={posts} />
    </section>
  );
}

export default Posts;
