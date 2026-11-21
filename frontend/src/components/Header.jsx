
function Header() {
  function scrollToSection(sectionId) {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  return (
    <header className="header">
      <h1>CommunityHub</h1>

      <nav>
        <a
          href="#home"
          onClick={() => scrollToSection('home')}
        >
          Home
        </a>

        <a
          href="#posts"
          onClick={() => scrollToSection('posts')}
        >
          Posts
        </a>

        <a
          href="#about"
          onClick={() => scrollToSection('about')}
        >
          About
        </a>
      </nav>
    </header>
  );
}

export default Header;
