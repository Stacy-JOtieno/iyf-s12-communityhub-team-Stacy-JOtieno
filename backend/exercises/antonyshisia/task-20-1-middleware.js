// ============================================
// LESSON 20 — CLASS EXERCISE
// Week 10 · Task 20.1: Middleware
//
// Exercise 1: logger and request-time middleware
// Exercise 2: built-in middleware (JSON, forms, static files)
// Exercise 3: route-specific auth middleware
//
// The function bodies live in backend/src/middleware/ (Member 4).
// This file is the exercise: it applies them to routes.
//
// Run from backend/:
//   node exercises/antonyshisia/task-20-1-middleware.js
// Test with task-20-1.http, or:
//   node --test exercises/antonyshisia/task-20-1-middleware.test.js
// ============================================

const path = require('path');
const express = require('express');
const logger = require('../../src/middleware/logger');
const requestTime = require('../../src/middleware/requestTime');
const requireAuth = require('../../src/middleware/requireAuth');

const app = express();
const PORT = process.env.PORT || 3000;

// Exercise 1 — Understanding middleware.
// logger records method, URL, timestamp, and response time.
// requestTime stamps the request so a route can read req.requestTime.
app.use(logger);
app.use(requestTime);

app.get('/api/time', (req, res) => {
  res.json({ requestTime: req.requestTime });
});

// Exercise 2 — Built-in middleware.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/echo', (req, res) => {
  res.json({ body: req.body });
});

// Exercise 3 — Route-specific middleware.
app.get('/api/protected', requireAuth, (req, res) => {
  res.json({ message: 'This is protected data' });
});

// Every route under /api/admin must send an Authorization header.
app.use('/api/admin', requireAuth);

app.get('/api/admin/status', (req, res) => {
  res.json({ message: 'Admin area' });
});

app.get('/', (req, res) => {
  res.send('Task 20.1 middleware exercise');
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Task 20.1 exercise running at http://localhost:${PORT}`);
  });
}

module.exports = app;
