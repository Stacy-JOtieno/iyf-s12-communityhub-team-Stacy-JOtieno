const path = require('path');

console.log("=== PATH MODULE ===");

// 1. Join folder and file names
const filePath = path.join(__dirname, 'files', 'data.json');

console.log("Joined path:", filePath);

// 2. Get file extension
const extension = path.extname('bike.jpg');

console.log("File extension:", extension);

// 3. Get file name
const filename = path.basename('/users/stacy/bike.jpg');

console.log("File name:", filename);

// 4. Get directory name
const directory = path.dirname('/users/stacy/photo.jpg');

console.log("Directory:", directory);

// 5. Get file name without extension
const nameWithoutExtension = path.basename('bike.jpg', '.jpg');

console.log("Name without extension:", nameWithoutExtension);
