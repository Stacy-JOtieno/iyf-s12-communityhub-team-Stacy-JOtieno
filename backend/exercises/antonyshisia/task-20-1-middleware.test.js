const { describe, it, before, after } = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');

const app = require('./task-20-1-middleware');

function request(server, { method = 'GET', path, headers = {}, body }) {
  const { port } = server.address();

  return new Promise((resolve, reject) => {
    const req = http.request(
      { hostname: '127.0.0.1', port, method, path, headers },
      (res) => {
        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => {
          const text = Buffer.concat(chunks).toString('utf8');
          let parsed = text;
          try {
            parsed = text ? JSON.parse(text) : null;
          } catch {
            parsed = text;
          }
          resolve({ status: res.statusCode, body: parsed, text });
        });
      }
    );
    req.on('error', reject);
    if (body) {
      req.write(body);
    }
    req.end();
  });
}

describe('Task 20.1 exercises', () => {
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

  it('Exercise 1 stamps requestTime', async () => {
    const response = await request(server, { path: '/api/time' });
    assert.equal(response.status, 200);
    assert.match(response.body.requestTime, /^\d{4}-\d{2}-\d{2}T/);
  });

  it('Exercise 2 serves a static file and parses JSON and form bodies', async () => {
    const file = await request(server, { path: '/hello.txt' });
    assert.equal(file.status, 200);
    assert.match(file.text, /static middleware/);

    const json = await request(server, {
      method: 'POST',
      path: '/api/echo',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Middleware' })
    });
    assert.equal(json.status, 200);
    assert.equal(json.body.body.title, 'Middleware');

    const form = await request(server, {
      method: 'POST',
      path: '/api/echo',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'title=Middleware&author=Antony'
    });
    assert.equal(form.status, 200);
    assert.equal(form.body.body.title, 'Middleware');
    assert.equal(form.body.body.author, 'Antony');
  });

  it('Exercise 3 blocks and then allows protected routes', async () => {
    const blocked = await request(server, { path: '/api/protected' });
    assert.equal(blocked.status, 401);
    assert.equal(blocked.body.error, 'No authorization header');

    const allowed = await request(server, {
      path: '/api/admin/status',
      headers: { Authorization: 'Bearer lesson-token' }
    });
    assert.equal(allowed.status, 200);
    assert.equal(allowed.body.message, 'Admin area');
  });
});
