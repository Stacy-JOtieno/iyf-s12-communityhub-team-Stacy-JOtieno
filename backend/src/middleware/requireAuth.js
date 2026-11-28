// Task 20.1 — stop the request when Authorization is missing.
// A real app would verify the token. This check only looks for the header.

function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !String(authHeader).trim()) {
    return res.status(401).json({ error: 'No authorization header' });
  }

  next();
}

module.exports = requireAuth;
