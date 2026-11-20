import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/posts", label: "Posts" },
  { to: "/create", label: "Create post" },
  { to: "/about", label: "About" },
];

function Layout() {
  return (
    <div className={styles.shell}>
      <a className={styles.skip} href="#main">
        Skip to content
      </a>
      <header className={styles.header}>
        <p className={styles.brand}>CommunityHub</p>
        <nav className={styles.nav} aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? styles.active : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <div className={styles.body}>
        <aside className={styles.sidebar}>
          <h2>Explore</h2>
          <nav aria-label="Explore">
            <ul>
              <li>
                <NavLink to="/posts">All posts</NavLink>
              </li>
              <li>
                <NavLink to="/create">Create a post</NavLink>
              </li>
              <li>
                <NavLink to="/about">About this hub</NavLink>
              </li>
            </ul>
          </nav>
        </aside>
        <main id="main" className={styles.main}>
          <Outlet />
        </main>
      </div>
      <footer className={styles.footer}>
        <p>CommunityHub. Season 12, 2026.</p>
      </footer>
    </div>
  );
}

export default Layout;
