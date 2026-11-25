
const express = require('express');

const router = express.Router();

// Temporary in-memory posts
let posts = [
  {
    id: 1,
    title: 'Welcome to CommunityHub',
    content: 'This is our first community post.',
    createdAt: new Date().toISOString()
  }
];

// POST /api/posts - Create a post
router.post('/', (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      error: 'Title and content are required'
    });
  }

  const newPost = {
    id: posts.length
      ? Math.max(...posts.map(post => post.id)) + 1
      : 1,
    title,
    content,
    createdAt: new Date().toISOString()
  };

  posts.push(newPost);

  return res.status(201).json({
    message: 'Post created successfully',
    post: newPost
  });
});

// PUT /api/posts/:id - Update a post
router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find(post => post.id === id);

  if (!post) {
    return res.status(404).json({
      error: 'Post not found'
    });
  }

  const { title, content } = req.body;

  if (title !== undefined) post.title = title;
  if (content !== undefined) post.content = content;

  post.updatedAt = new Date().toISOString();

  return res.status(200).json({
    message: 'Post updated successfully',
    post
  });
});

// DELETE /api/posts/:id - Delete a post
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const postIndex = posts.findIndex(post => post.id === id);

  if (postIndex === -1) {
    return res.status(404).json({
      error: 'Post not found'
    });
  }

  const deletedPost = posts.splice(postIndex, 1)[0];

  return res.status(200).json({
    message: 'Post deleted successfully',
    post: deletedPost
  });
});

module.exports = router;
