const express = require("express");
const app = express();
const PORT = 3013;

app.use(express.json());

let posts = [
  {
    id: 1,
    title: "Getting Started with Node.js",
    content: "Node is a JavaScript runtime",
    author: "Carlos Adenge",
    createdAt: "2026-11-20T10:00:00Z",
    likes: 8,
  },
  {
    id: 2,
    title: "Express Fundamentals",
    content: "Express makes APIs easy",
    author: "Stacy Otieno",
    createdAt: "2026-11-22T14:00:00Z",
    likes: 15,
  },
  {
    id: 3,
    title: "Node Modules Deep Dive",
    content: "fs and path are powerful",
    author: "Carlos Adenge",
    createdAt: "2026-11-25T09:00:00Z",
    likes: 4,
  },
];

app.get("/api/posts", (req, res) => {
  let result = [...posts];
  const { author, search, sort, page = 1, limit = 10 } = req.query;

  if (author) {
    result = result.filter((p) =>
      p.author.toLowerCase().includes(author.toLowerCase())
    );
  }

  if (search) {
    result = result.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (sort === "newest") {
    result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } else if (sort === "popular") {
    result.sort((a, b) => b.likes - a.likes);
  }

  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);
  const start = (pageNum - 1) * limitNum;
  const paginated = result.slice(start, start + limitNum);

  res.json({
    total: result.length,
    page: pageNum,
    limit: limitNum,
    data: paginated,
  });
});

app.listen(PORT, () => {
  console.log(`Day 3 query filter: http://localhost:${PORT}`);
  console.log("Try: /api/posts?author=carlos&sort=newest&page=1&limit=5");
});
