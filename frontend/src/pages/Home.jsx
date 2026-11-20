
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-page">
      <h1>Welcome to CommunityHub</h1>

      <p>
        Connect with your community, share ideas, discover announcements,
        and stay updated on events.
      </p>

      <h2>Welcome to Our Community</h2>

      <p>
        CommunityHub is a place where members can learn, share,
        interact, and support one another.
      </p>

      <nav aria-label="Explore CommunityHub">
        <Link to="/posts">Explore Posts</Link>
        {" | "}
        <Link to="/create-post">Create a Post</Link>
      </nav>
    </section>
  );
}

export default Home;
