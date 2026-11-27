const express = require('express');
const router = express.Router();

const {
  createPost,
  updatePost,
  deletePost
} = require('../../src/controllers/postsController');

// These exercise routes use the same posts store as the main GET API.
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;
