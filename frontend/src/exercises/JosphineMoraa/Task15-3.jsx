
import React from "react";

// Exercise 1: Passing Props
function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

// Exercise 2: Dynamic PostCard
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

// Exercise 3: Rendering Lists
function PostList() {
  const posts = [
    {
      id: 1,
      title: "First Post",
      excerpt: "Welcome to CommunityHub!",
      author: "Alice",
      date: "Jan 15, 2026"
    },
    {
      id: 2,
      title: "Second Post",
      excerpt: "Learning React with props.",
      author: "Bob",
      date: "Jan 14, 2026"
    },
    {
      id: 3,
      title: "Third Post",
      excerpt: "Building with React components.",
      author: "Charlie",
      date: "Jan 13, 2026"
    }
  ];

  return (
    <div className="post-list">
      {posts.map(post => (
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

// Exercise 4: Button with Default Props
function Button({
  text = "Click me",
  variant = "primary",
  size = "medium",
  disabled = false
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

// Main component
function Task15_3() {
  return (
    <div>
      <h1>Task 15.3: Working with Props</h1>

      <h2>Exercise 1</h2>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />

      <h2>Exercise 2 and 3</h2>
      <PostList />

      <h2>Exercise 4</h2>
      <Button text="Submit" />
      <Button text="Cancel" variant="secondary" />
      <Button text="Delete" variant="danger" />
      <Button />
    </div>
  );
}

export default Task15_3;
