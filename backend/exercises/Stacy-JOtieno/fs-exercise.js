const fs = require('fs');

console.log("=== FILE SYSTEM MODULE ===");

// 1. Read a file synchronously
const content = fs.readFileSync('hello.js', 'utf-8');

console.log("\nSynchronous file reading:");
console.log(content);

// 2. Read a file asynchronously
fs.readFile('hello.js', 'utf-8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    console.log("\nAsynchronous file reading:");
    console.log(data);
});

// 3. Write a file
fs.writeFileSync('output.txt', 'Hello, World!');

console.log("\nFile written successfully!");

// 4. Check if the file exists
if (fs.existsSync('output.txt')) {
    console.log("output.txt exists!");
}
