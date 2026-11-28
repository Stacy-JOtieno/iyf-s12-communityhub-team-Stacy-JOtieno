// Task 20.1 — stamp when this request arrived.
// Routes read it as req.requestTime.

function requestTime(req, res, next) {
  req.requestTime = new Date().toISOString();
  next();
}

module.exports = requestTime;
