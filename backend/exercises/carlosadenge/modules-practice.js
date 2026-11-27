// Task 19.1 — Built-in modules practice
const fs = require("fs");
const path = require("path");

console.log("=== path module ===");
console.log("Joined path:", path.join(__dirname, "files", "data.json"));
console.log("Extension:", path.extname("photo.jpg"));

console.log("\n=== fs module ===");
const message = "Hello from Carlos Adenge — Week 10 practice\n";
fs.writeFileSync(path.join(__dirname, "output.txt"), message);
console.log("Wrote output.txt");

const content = fs.readFileSync(path.join(__dirname, "output.txt"), "utf-8");
console.log("Read back:", content.trim());
