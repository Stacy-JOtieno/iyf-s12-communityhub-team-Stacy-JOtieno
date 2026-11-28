const express = require('express');
const router = express.Router();

const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
} = require('../controllers/postsController');

// GET /api/posts
router.get('/posts', getAllPosts);

// GET /api/posts/:id
router.get('/posts/:id', getPostById);

// POST /api/posts
router.post('/posts', createPost);

// PUT /api/posts/:id
router.put('/posts/:id', updatePost);

// DELETE /api/posts/:id
router.delete('/posts/:id', deletePost);

module.exports = router;
