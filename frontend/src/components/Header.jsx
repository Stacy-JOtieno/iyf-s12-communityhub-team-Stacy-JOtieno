
function Header() {
  return (
    <header className="header">
      <h1>CommunityHub</h1>

      <div className="header-actions">
        <nav>
          <a href="#">Home</a>
          <a href="#">Posts</a>
          <a href="#">About</a>
        </nav>
        <button type="button" className="login-button">Log in</button>
      </div>
    </header>
  );
}

export default Header;
