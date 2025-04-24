const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve the root route
app.get("/", (req, res) => {
  res.send("Welcome to the API! Your server is running.");
});

// Serve the /api/apps route using the mock_android_apps.json file
app.get("/api/apps", (req, res) => {
  const filePath = path.join(__dirname, "mock_android_apps.json");

  // Read the JSON file and send the data
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading the file." });
    }
    const apps = JSON.parse(data);
    res.json(apps); // Send the data as JSON
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
