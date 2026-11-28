const test = require('node:test');
const assert = require('node:assert/strict');
const { once } = require('node:events');
const app = require('../../src/app');

test('CommunityHub posts API CRUD integration', async t => {
  const server = app.listen(0);
  await once(server, 'listening');

  const baseUrl = `http://127.0.0.1:${server.address().port}/api/posts`;

  t.after(() => new Promise((resolve, reject) => {
    server.close(error => error ? reject(error) : resolve());
  }));

  let createdId;

  await t.test('GET all posts still returns the existing posts', async () => {
    const response = await fetch(baseUrl);
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.equal(body.success, true);
    assert.ok(Array.isArray(body.data));
    assert.ok(body.data.some(post => post.id === 1));
  });

  await t.test('POST creates a post visible through GET', async () => {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'Josphine integration test',
        content: 'Testing shared posts data',
        author: 'Josphine'
      })
    });
    const body = await response.json();

    assert.equal(response.status, 201);
    assert.equal(body.success, true);
    assert.equal(body.data.title, 'Josphine integration test');
    createdId = body.data.id;

    const getResponse = await fetch(`${baseUrl}/${createdId}`);
    const getBody = await getResponse.json();

    assert.equal(getResponse.status, 200);
    assert.equal(getBody.data.id, createdId);
  });

  await t.test('PUT updates the same post returned by GET', async () => {
    const response = await fetch(`${baseUrl}/${createdId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Updated by Josphine' })
    });
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.equal(body.data.title, 'Updated by Josphine');

    const getResponse = await fetch(`${baseUrl}/${createdId}`);
    const getBody = await getResponse.json();
    assert.equal(getBody.data.title, 'Updated by Josphine');
  });

  await t.test('DELETE removes the post from GET results', async () => {
    const response = await fetch(`${baseUrl}/${createdId}`, {
      method: 'DELETE'
    });

    assert.equal(response.status, 200);

    const getResponse = await fetch(`${baseUrl}/${createdId}`);
    assert.equal(getResponse.status, 404);
  });

  await t.test('Invalid and missing IDs return appropriate errors', async () => {
    const invalidResponse = await fetch(`${baseUrl}/abc`);
    assert.equal(invalidResponse.status, 400);

    const missingResponse = await fetch(`${baseUrl}/999999`, {
      method: 'DELETE'
    });
    assert.equal(missingResponse.status, 404);
  });

  await t.test('POST rejects missing required fields', async () => {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Missing content' })
    });

    assert.equal(response.status, 400);
  });
});
