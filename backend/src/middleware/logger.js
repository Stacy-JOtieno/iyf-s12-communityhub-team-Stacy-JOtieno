// Task 20.1 — log the method, URL, timestamp, status, and response time.
// Status and duration are only known once the response finishes.

function logger(req, res, next) {
  const start = Date.now();
  const timestamp = new Date().toISOString();

  res.on('finish', () => {
    const durationMs = Date.now() - start;
    console.log(
      `${timestamp} ${req.method} ${req.originalUrl} ${res.statusCode} ${durationMs}ms`
    );
  });

  next();
}

module.exports = logger;
