function Sidebar() {
  return (
    <aside className="sidebar">
      <section>
        <h3>About</h3>
        <p>
          CommunityHub is a place where people share ideas, ask questions,
          and connect with others.
        </p>
      </section>

      <section>
        <h3>Popular Posts</h3>
        <ul>
          <li>Getting Started with React</li>
          <li>JavaScript Best Practices</li>
          <li>Understanding Props</li>
        </ul>
      </section>

      <section>
        <h3>Tags</h3>
        <div className="tags">
          <span>React</span>
          <span>JavaScript</span>
          <span>Web Dev</span>
          <span>Beginner</span>
        </div>
      </section>
    </aside>
  );
}

export default Sidebar;