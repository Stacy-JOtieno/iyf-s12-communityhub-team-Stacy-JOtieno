import { useState } from "react";

function Task16_3() {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", author: "Carlos" },
    { id: 2, title: "Learning React", author: "Carlos" },
  ]);

  const [newTitle, setNewTitle] = useState("");

  function addPost() {
    if (newTitle.trim() === "") return;

    const newPost = {
      id: Date.now(),
      title: newTitle,
      author: "Carlos Adenge",
    };

    setPosts([newPost, ...posts]);
    setNewTitle("");
  }

  function deletePost(id) {
    setPosts(posts.filter((post) => post.id !== id));
  }

  return (
    <div>
      <h1>Task 16.3 – Arrays & Objects in State</h1>

      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="New post title"
      />
      <button onClick={addPost}>Add Post</button>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong> — {post.author}
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task16_3;
