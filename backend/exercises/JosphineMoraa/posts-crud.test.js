
const test = require('node:test');
const assert = require('node:assert/strict');
const express = require('express');
const { once } = require('node:events');

const postsRouter = require('./posts-crud');

test('Posts CRUD API', async (t) => {
  const app = express();
  app.use(express.json());
  app.use('/api/posts', postsRouter);

  const server = app.listen(0);
  await once(server, 'listening');

  const baseUrl = `http://localhost:${server.address().port}/api/posts`;

  t.after(() => {
    server.close();
  });

  let createdId;

  await t.test('POST creates a post', async () => {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'My first post',
        content: 'Hello CommunityHub!'
      })
    });

    const data = await response.json();

    assert.equal(response.status, 201);
    assert.equal(data.post.title, 'My first post');
    assert.ok(data.post.id);

    createdId = data.post.id;
  });

  await t.test('PUT updates a post', async () => {
    const response = await fetch(`${baseUrl}/${createdId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'Updated post'
      })
    });

    const data = await response.json();

    assert.equal(response.status, 200);
    assert.equal(data.post.title, 'Updated post');
    assert.ok(data.post.updatedAt);
  });

  await t.test('DELETE removes a post', async () => {
    const response = await fetch(`${baseUrl}/${createdId}`, {
      method: 'DELETE'
    });

    assert.equal(response.status, 200);
  });

  await t.test('Updating a missing post returns 404', async () => {
    const response = await fetch(`${baseUrl}/99999`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Missing' })
    });

    assert.equal(response.status, 404);
  });
});
