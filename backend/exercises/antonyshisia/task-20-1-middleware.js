// ============================================
// LESSON 20 — CLASS EXERCISE
// Week 10 · Task 20.1: Middleware
// Daily challenge Day 4: logger also records response time and writes a file.
//
// Lives in: backend/exercises/antonyshisia/task-20-1-middleware.js
// Run from backend/:
//   node exercises/antonyshisia/task-20-1-middleware.js
// Test:
//   node --test exercises/antonyshisia/task-20-1-middleware.test.js
// ============================================

const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const logDir = path.join(__dirname, '..', '..', 'logs');
const logFile = path.join(logDir, 'requests.log');

// Exercise 1 — Understanding middleware.
// Logs method, URL, and timestamp as the request arrives.
// On the way out, logs response time and appends the line to a file (Day 4).
const logger = (req, res, next) => {
  const start = Date.now();
  const timestamp = new Date().toISOString();
  // Snapshot the URL now. A mounted route such as /api/admin rewrites req.url later.
  const url = req.originalUrl || req.url;

  console.log(`${timestamp} - ${req.method} ${url}`);

  res.on('finish', () => {
    const durationMs = Date.now() - start;
    const line = `${timestamp} - ${req.method} ${url} ${res.statusCode} ${durationMs}ms`;
    console.log(line);

    try {
      fs.mkdirSync(logDir, { recursive: true });
      fs.appendFileSync(logFile, `${line}\n`);
    } catch (err) {
      console.error('Failed to write request log:', err.message);
    }
  });

  next();
};

const addRequestTime = (req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
};

app.use(logger);
app.use(addRequestTime);

app.get('/api/time', (req, res) => {
  res.json({ requestTime: req.requestTime });
});

// Exercise 2 — Built-in middleware.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/echo', (req, res) => {
  res.json({ body: req.body });
});

// Exercise 3 — Route-specific middleware.
const requireAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'No authorization header' });
  }

  next();
};

app.get('/api/protected', requireAuth, (req, res) => {
  res.json({ message: 'This is protected data' });
});

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
module.exports.logFile = logFile;
