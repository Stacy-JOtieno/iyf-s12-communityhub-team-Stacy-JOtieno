
const express = require('express');
const routes = require('./routes');
const logger = require('./middleware/logger');
const requestTime = require('./middleware/requestTime');
const requireAuth = require('./middleware/requireAuth');

const app = express();

// Task 20.1 — runs for every request, before the route handlers.
app.use(logger);
app.use(requestTime);

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic routes
app.get('/', (req, res) => {
  res.send('Welcome to CommunityHub API');
});

app.get('/about', (req, res) => {
  res.send('CommunityHub - A community platform');
});

// Current server time route. requestTime is the stamp from middleware.
app.get('/api/time', (req, res) => {
  res.json({
    message: 'Current server time',
    time: new Date().toISOString(),
    requestTime: req.requestTime
  });
});

// Task 20.1 — same guard on one route and on everything under /api/admin.
app.get('/api/protected', requireAuth, (req, res) => {
  res.json({
    message: 'This is protected data',
    requestTime: req.requestTime
  });
});

app.use('/api/admin', requireAuth);

app.get('/api/admin/status', (req, res) => {
  res.json({
    message: 'Admin area',
    requestTime: req.requestTime
  });
});

// API routes
app.use('/api', routes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found'
  });
});

module.exports = app;
