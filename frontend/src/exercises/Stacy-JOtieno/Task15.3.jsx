// src/exercises/Stacy-JOtieno/Task15-3.jsx

function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

function PostCard({ title, excerpt, author, date }) {
  return (
    <article className="post-card">
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <div className="post-meta">
        <span>By {author}</span>
        <span>{date}</span>
      </div>
    </article>
  );
}

function PostList() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with React",
      excerpt: "Learn the basics of React...",
      author: "Amina Otieno",
      date: "Jan 15, 2026",
    },
    {
      id: 2,
      title: "JavaScript Best Practices",
      excerpt: "Write cleaner code...",
      author: "Brian Kamau",
      date: "Jan 10, 2026",
    },
    {
      id: 3,
      title: "Understanding Props",
      excerpt: "How to pass data between components...",
      author: "Stacy JOtieno",
      date: "Jan 17, 2026",
    },
  ];

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          excerpt={post.excerpt}
          author={post.author}
          date={post.date}
        />
      ))}
    </div>
  );
}

function Button({
  text = "Click me",
  variant = "primary",
  size = "medium",
  disabled = false,
}) {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

function Task15_3() {
  return (
    <div>
      <h1>Task 15.3 – Working with Props</h1>

      {/* Exercise 1: Passing Props */}
      <section>
        <h2>Greetings</h2>
        <Greeting name="Alice" />
        <Greeting name="Bob" />
        <Greeting name="Charlie" />
      </section>

      {/* Exercise 2 & 3: Dynamic PostCard + Lists */}
      <section>
        <h2>Posts</h2>
        <PostList />
      </section>

      {/* Exercise 4: Button with default props */}
      <section>
        <h2>Buttons</h2>
        <Button text="Submit" variant="primary" />
        <Button text="Cancel" variant="secondary" />
        <Button text="Delete" variant="danger" />
        <Button /> {/* uses all defaults */}
      </section>
    </div>
  );
}

export default Task15_3;