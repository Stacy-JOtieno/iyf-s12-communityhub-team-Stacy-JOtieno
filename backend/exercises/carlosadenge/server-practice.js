// backend/exercises/carlosadenge/server-practice.js
const express = require("express");
const app = express();
const PORT = 3001; // use 3001 so it does not clash with the main server

app.get("/", (req, res) => {
  res.send("Welcome to CommunityHub API — Carlos practice");
});

app.get("/about", (req, res) => {
  res.send("CommunityHub - A community platform");
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    student: "Carlos Adenge",
    timestamp: new Date().toISOString(),
  });
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Practice server running at http://localhost:${PORT}`);
});
