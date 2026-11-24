
const express = require('express');

const router = express.Router();

// API health check
router.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'CommunityHub API is running',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
