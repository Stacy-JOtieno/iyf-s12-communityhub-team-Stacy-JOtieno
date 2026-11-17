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

function Task15_3() {
  return (
    <div>
      <h1>Task 15.3 – Working with Props</h1>

      <Greeting name="Carlos" />
      <Greeting name="Stacy" />
      <Greeting name="Josphine" />

      <hr />

      <PostCard
        title="Getting Started with React"
        excerpt="Learn the basics of components, props and JSX."
        author="Carlos Adenge"
        date="Nov 17, 2026"
      />

      <PostCard
        title="Why Props Matter"
        excerpt="Props allow us to make reusable components."
        author="Carlos Adenge"
        date="Nov 16, 2026"
      />
    </div>
  );
}

export default Task15_3;
