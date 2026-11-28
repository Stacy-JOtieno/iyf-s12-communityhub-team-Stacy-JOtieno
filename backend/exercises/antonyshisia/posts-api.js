// ============================================
// LESSON 19 — TASK 19.4
// CommunityHub posts API with in-memory data.
//
// Lives in:  backend/exercises/antonyshisia/posts-api.js
// Run from backend/:  node --watch exercises/antonyshisia/posts-api.js
// Test with:          exercises/posts-api.http
// ============================================

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let posts = [
  {
    id: 1,
    title: 'Getting Started with Node.js',
    content: 'Node.js is a JavaScript runtime...',
    author: 'John Doe',
    createdAt: '2026-01-15T10:00:00Z',
    likes: 10,
  },
  {
    id: 2,
    title: 'Express.js Fundamentals',
    content: 'Express is a web framework...',
    author: 'Jane Smith',
    createdAt: '2026-01-16T14:30:00Z',
    likes: 15,
  },
];

let nextId = 3;

app.get('/api/posts', (req, res) => {
  const { author, sort } = req.query;

  let result = [...posts];

  if (author) {
    const wanted = String(author).toLowerCase();
    result = result.filter((post) => post.author.toLowerCase().includes(wanted));
  }

  if (sort === 'newest') {
    result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } else if (sort === 'popular') {
    result.sort((a, b) => b.likes - a.likes);
  }

  res.json(result);
});

app.get('/api/posts/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const post = posts.find((item) => item.id === id);

  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }

  res.json(post);
});

app.post('/api/posts', (req, res) => {
  const { title, content, author } = req.body ?? {};

  if (!title || !content || !author) {
    return res.status(400).json({
      error: 'Title, content, and author are required',
    });
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

app.put('/api/posts/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const postIndex = posts.findIndex((item) => item.id === id);

  if (postIndex === -1) {
    return res.status(404).json({ error: 'Post not found' });
  }

  const { title, content } = req.body ?? {};

  posts[postIndex] = {
    ...posts[postIndex],
    title: title || posts[postIndex].title,
    content: content || posts[postIndex].content,
    updatedAt: new Date().toISOString(),
  };

  res.json(posts[postIndex]);
});

app.delete('/api/posts/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const postIndex = posts.findIndex((item) => item.id === id);

  if (postIndex === -1) {
    return res.status(404).json({ error: 'Post not found' });
  }

  posts.splice(postIndex, 1);
  res.status(204).send();
});

app.patch('/api/posts/:id/like', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const post = posts.find((item) => item.id === id);

  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }

  post.likes += 1;
  res.json(post);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
