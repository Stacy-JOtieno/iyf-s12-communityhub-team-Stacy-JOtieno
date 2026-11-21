// ============================================
// LESSON 19 — CLASS EXERCISE
// CommunityHub posts API, read-only: GET endpoints, params, query strings.
// Week 10 · Tasks 19.3 and 19.4 (GET half) · Daily challenge Day 3 (bonus step)
//
// Lives in:  backend/exercises/{username}/posts-api.js   ({username} = your GitHub username)
// Move this file there first. Run from backend/:   node --watch exercises/{username}/posts-api.js
// Test with:           posts-api.http (VS Code REST Client), Thunder Client, Postman or curl
// ============================================

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// In-memory data. Restart the server and every change is gone (Lesson 21 fixes that).
const posts = [
  {
    id: 1,
    title: 'Getting Started with Node.js',
    content: 'Node.js runs JavaScript outside the browser.',
    author: 'amina',
    createdAt: '2026-11-02T09:00:00Z',
    likes: 12,
  },
  {
    id: 2,
    title: 'Express Routing in Ten Minutes',
    content: 'A route is a method, a path and a handler.',
    author: 'brian',
    createdAt: '2026-11-05T14:30:00Z',
    likes: 30,
  },
  {
    id: 3,
    title: 'Why Status Codes Matter',
    content: '200, 201, 400, 404: the client reads the number first.',
    author: 'amina',
    createdAt: '2026-11-08T08:15:00Z',
    likes: 7,
  },
  {
    id: 4,
    title: 'Query Strings vs Route Params',
    content: 'Params name the thing. Query strings filter the list.',
    author: 'cyrus',
    createdAt: '2026-11-10T17:45:00Z',
    likes: 19,
  },
];

// A query value is a string. Missing values use the default.
// Present values must be positive whole numbers (1, 2, 3...), not 0, negatives, or decimals.
function readPositiveWholeNumber(value, fallback) {
  if (value === undefined) {
    return fallback;
  }

  const number = Number(value);
  if (!Number.isInteger(number) || number < 1) {
    return null;
  }

  return number;
}

// STEP 1 — GIVEN. Text and JSON responses. Run the file, open both URLs in the browser.
app.get('/', (req, res) => {
  res.send('Welcome to CommunityHub API');
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// STEP 2 — List all posts.
// GET /api/posts responds with { posts, pagination }.
// Shaped as an object, not a bare array, so pagination can sit beside posts.
app.get('/api/posts', (req, res) => {
  // STEP 4 — Filter, search and sort with the query string.
  // sort defaults to 'newest'. Copy the array first: .sort() mutates what it is called on.
  const author = req.query.author;
  const search = req.query.search;
  const sort = req.query.sort === undefined ? 'newest' : String(req.query.sort);

  if (sort !== 'newest' && sort !== 'oldest' && sort !== 'popular') {
    return res.status(400).json({ error: 'sort must be newest, oldest or popular' });
  }

  // STEP 5 (bonus, Day 3) — Pagination: ?page=2&limit=2
  // Query values are strings. Convert with Number(). Default page 1, limit 10.
  const page = readPositiveWholeNumber(req.query.page, 1);
  const limit = readPositiveWholeNumber(req.query.limit, 10);

  if (page === null) {
    return res.status(400).json({ error: 'page must be a positive whole number' });
  }

  if (limit === null) {
    return res.status(400).json({ error: 'limit must be a positive whole number' });
  }

  let result = [...posts];

  // ?author=amina -> exact author, case-insensitive
  if (author !== undefined && String(author) !== '') {
    const wanted = String(author).toLowerCase();
    result = result.filter((post) => post.author.toLowerCase() === wanted);
  }

  // ?search=express -> title contains the word, case-insensitive
  if (search !== undefined && String(search) !== '') {
    const needle = String(search).toLowerCase();
    result = result.filter((post) => post.title.toLowerCase().includes(needle));
  }

  // ?sort=newest | oldest | popular (popular = most likes first)
  if (sort === 'newest') {
    result.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  } else if (sort === 'oldest') {
    result.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1));
  } else {
    result.sort((a, b) => b.likes - a.likes);
  }

  const total = result.length;
  const pages = Math.ceil(total / limit);
  const start = (page - 1) * limit;

  res.json({
    posts: result.slice(start, start + limit),
    pagination: { page, limit, total, pages },
  });
});

// STEP 3 — One post by id.
// req.params.id is a string. Number('2abc') is NaN; parseInt('2abc') would be 2.
app.get('/api/posts/:id', (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({ error: 'Post id must be a whole number' });
  }

  const post = posts.find((item) => item.id === id);

  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }

  res.json(post);
});

// STEP 6 — 404 for every unmatched route.
// Last thing before app.listen — routes are checked top to bottom.
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Posts API running at http://localhost:${PORT}`);
});

// STEP 7 — Commit (from the team repo root, on your own branch):
//   git checkout -b exercises/{username}-week10
//   git add backend/exercises/{username}/
//   git commit -m "Add: Lesson 19 read-only posts API"
//   git push -u origin exercises/{username}-week10
//   Open a PR, request a teammate's review. Do not merge your own.
