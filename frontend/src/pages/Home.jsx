import { Link } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";
import PostList from "../components/Post/PostList";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import ErrorMessage from "../components/shared/ErrorMessage";
import { Card } from "../components/shared";

function Home() {
  const { posts, loading, error, reload, toggleLike } = usePosts();

  return (
    <section>
      <h1>Welcome to CommunityHub</h1>
      <Card>
        <p>CommunityHub is the Season 12 space for reading and sharing posts.</p>
        <p>
          <Link to="/create">Create a post</Link>
        </p>
      </Card>
      <h2>Recent posts</h2>
      {loading && <LoadingSpinner text="Loading posts..." />}
      {error && <ErrorMessage message={error} onRetry={reload} />}
      {!loading && !error && (
        <PostList posts={posts.slice(0, 5)} onLike={toggleLike} />
      )}
    </section>
  );
}

export default Home;
