
const express = require('express');
const router = express.Router();

const {
  getAllPosts,
  getPostById
} = require('../controllers/postsController');

// GET /api/posts
router.get('/posts', getAllPosts);

// GET /api/posts/:id
router.get('/posts/:id', getPostById);

module.exports = router;
