
const express = require('express');
const routes = require('./routes');

const app = express();

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

// Current server time route
app.get('/api/time', (req, res) => {
  res.json({
    message: 'Current server time',
    time: new Date().toISOString()
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
