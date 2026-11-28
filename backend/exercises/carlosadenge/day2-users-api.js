const express = require("express");
const app = express();
const PORT = 3012;

app.use(express.json());

let users = [
  { id: 1, name: "Carlos Adenge", email: "carlos@example.com" },
  { id: 2, name: "Tiberius Obuli", email: "tiberius@example.com" },
];
let nextId = 3;

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

app.post("/api/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }
  if (!email.includes("@")) {
    return res.status(400).json({ error: "Email must be valid" });
  }

  const newUser = { id: nextId++, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(PORT, () => {
  console.log(`Day 2 users API: http://localhost:${PORT}`);
});
