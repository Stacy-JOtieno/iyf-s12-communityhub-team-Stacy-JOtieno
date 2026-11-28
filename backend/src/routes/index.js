const express = require('express');
const router = express.Router();
const postsRoutes = require('./posts');

// API health check
router.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'CommunityHub API is running',
    timestamp: new Date().toISOString()
  });
});
router.use(postsRoutes);

module.exports = router;
