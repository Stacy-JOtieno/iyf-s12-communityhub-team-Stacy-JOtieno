import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section>
      <h1>Page not found</h1>
      <p>That address is not part of CommunityHub.</p>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </section>
  );
}

export default NotFound;
