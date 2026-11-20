
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>CommunityHub</h1>

      <nav aria-label="Main navigation">
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/create">Create Post</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;
