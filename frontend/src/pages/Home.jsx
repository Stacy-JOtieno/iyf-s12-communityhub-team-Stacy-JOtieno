import { Link } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";
import PostList from "../components/Post/PostList";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import ErrorMessage from "../components/shared/ErrorMessage";
import { Card } from "../components/shared";

function Home() {
  const { posts, loading, error, reload, toggleLike } = usePosts();

  return (
    <section className="home-page">
      <h1>Welcome to CommunityHub</h1>

      <Card>
        <h2>Welcome to Our Community</h2>

        <p>
          CommunityHub is a place where members can learn, share,
          interact, and support one another.
        </p>

        <p>
          <Link to="/posts">Explore Posts</Link>
          {" | "}
          <Link to="/create">Create a Post</Link>
        </p>
      </Card>

      <h2>Recent Posts</h2>

      {loading && <LoadingSpinner text="Loading posts..." />}

      {error && <ErrorMessage message={error} onRetry={reload} />}

      {!loading && !error && (
        <PostList posts={posts.slice(0, 5)} onLike={toggleLike} />
      )}
    </section>
  );
}

export default Home;