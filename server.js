// Importing necessary modules
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Root route - for checking if the server is running
app.get('/', (req, res) => {
  res.send('Welcome to the API! Your server is running.');
});

// API endpoint to get apps (customize as needed)
app.get('/api/apps', (req, res) => {
  // Example response, replace this with your actual data fetching logic
  const apps = [
    { name: 'App 1', description: 'This is the first app' },
    { name: 'App 2', description: 'This is the second app' },
    { name: 'App 3', description: 'This is the third app' },
  ];

  res.json(apps);
});

// Start the server
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
