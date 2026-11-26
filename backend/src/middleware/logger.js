// Task 20.1 — log the method, URL, timestamp, status, and response time.
// Day 4 bonus — append the same line to backend/logs/requests.log.
// Status and duration are only known once the response finishes.

const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, '..', '..', 'logs');
const logFile = path.join(logDir, 'requests.log');

function logger(req, res, next) {
  const start = Date.now();
  const timestamp = new Date().toISOString();

  res.on('finish', () => {
    const durationMs = Date.now() - start;
    const line = `${timestamp} ${req.method} ${req.originalUrl} ${res.statusCode} ${durationMs}ms`;
    console.log(line);

    try {
      fs.mkdirSync(logDir, { recursive: true });
      fs.appendFileSync(logFile, `${line}\n`);
    } catch (err) {
      console.error('Failed to write request log:', err.message);
    }
  });

  next();
}

module.exports = logger;
module.exports.logFile = logFile;
