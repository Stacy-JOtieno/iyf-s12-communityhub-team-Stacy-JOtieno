const { describe, it, before, after } = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');

const app = require('../app');

function request(server, { method = 'GET', path, headers = {} }) {
  const { port } = server.address();

  return new Promise((resolve, reject) => {
    const req = http.request(
      { hostname: '127.0.0.1', port, method, path, headers },
      (res) => {
        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => {
          const text = Buffer.concat(chunks).toString('utf8');
          let body = text;
          try {
            body = text ? JSON.parse(text) : null;
          } catch {
            body = text;
          }
          resolve({ status: res.statusCode, body });
        });
      }
    );
    req.on('error', reject);
    req.end();
  });
}

describe('Task 20.1 middleware', () => {
  let server;

  before(async () => {
    server = http.createServer(app);
    await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  });

  after(async () => {
    await new Promise((resolve, reject) => {
      server.close((err) => (err ? reject(err) : resolve()));
    });
  });

  it('still serves existing public routes', async () => {
    const home = await request(server, { path: '/' });
    assert.equal(home.status, 200);
    assert.match(home.body, /CommunityHub API/);

    const posts = await request(server, { path: '/api/posts' });
    assert.equal(posts.status, 200);
    assert.equal(posts.body.success, true);
    assert.ok(posts.body.count >= 1);
  });

  it('attaches requestTime on /api/time', async () => {
    const response = await request(server, { path: '/api/time' });
    assert.equal(response.status, 200);
    assert.equal(response.body.message, 'Current server time');
    assert.match(response.body.time, /^\d{4}-\d{2}-\d{2}T/);
    assert.match(response.body.requestTime, /^\d{4}-\d{2}-\d{2}T/);
  });

  it('blocks /api/protected and /api/admin without Authorization', async () => {
    const protectedRoute = await request(server, { path: '/api/protected' });
    assert.equal(protectedRoute.status, 401);
    assert.equal(protectedRoute.body.error, 'No authorization header');

    const admin = await request(server, { path: '/api/admin/status' });
    assert.equal(admin.status, 401);
    assert.equal(admin.body.error, 'No authorization header');
  });

  it('allows protected routes when Authorization is present', async () => {
    const headers = { Authorization: 'Bearer lesson-token' };

    const protectedRoute = await request(server, { path: '/api/protected', headers });
    assert.equal(protectedRoute.status, 200);
    assert.equal(protectedRoute.body.message, 'This is protected data');
    assert.match(protectedRoute.body.requestTime, /^\d{4}-\d{2}-\d{2}T/);

    const admin = await request(server, { path: '/api/admin/status', headers });
    assert.equal(admin.status, 200);
    assert.equal(admin.body.message, 'Admin area');
  });

  it('returns 404 for an unknown route', async () => {
    const response = await request(server, { path: '/api/does-not-exist' });
    assert.equal(response.status, 404);
    assert.equal(response.body.error, 'Route not found');
  });
});
