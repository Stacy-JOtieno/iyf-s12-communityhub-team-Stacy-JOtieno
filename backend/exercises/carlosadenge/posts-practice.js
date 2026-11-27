// Task 19.4 — Simple Posts API practice (in-memory)
const express = require("express");
const app = express();
const PORT = 3002;

app.use(express.json());

let posts = [
  {
    id: 1,
    title: "Getting Started with Node.js",
    content: "Node.js is a JavaScript runtime...",
    author: "Carlos Adenge",
    createdAt: "2026-11-20T10:00:00Z",
    likes: 5,
  },
];
let nextId = 2;

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.get("/api/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ error: "Post not found" });
  res.json(post);
});

app.post("/api/posts", (req, res) => {
  const { title, content, author } = req.body;
  if (!title || !content || !author) {
    return res.status(400).json({ error: "Title, content, and author are required" });
  }
  const newPost = {
    id: nextId++,
    title,
    content,
    author,
    createdAt: new Date().toISOString(),
    likes: 0,
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.patch("/api/posts/:id/like", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ error: "Post not found" });
  post.likes++;
  res.json(post);
});

app.listen(PORT, () => {
  console.log(`Posts practice API at http://localhost:${PORT}`);
});
