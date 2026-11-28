const express = require("express");
const app = express();
const PORT = 3011;

app.get("/", (req, res) => {
  res.send("Welcome to CommunityHub — Carlos Adenge");
});

app.get("/about", (req, res) => {
  res.send("CommunityHub is a community platform built for IYF Season 12.");
});

app.get("/api/time", (req, res) => {
  res.json({
    time: new Date().toISOString(),
    student: "Carlos Adenge",
  });
});

app.listen(PORT, () => {
  console.log(`Day 1 server: http://localhost:${PORT}`);
});
