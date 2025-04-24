const express = require('express');
const app = express();
const port = 3000;

// Sample data or route to fetch apps
app.get('/api/apps', (req, res) => {
  const softwareData = [
    {
      name: "Software 1",
      description: "Great productivity software.",
      category: "Productivity",
      downloadLink: "http://example.com/download/software1"
    },
    {
      name: "Software 2",
      description: "Perfect for video editing.",
      category: "Multimedia",
      downloadLink: "http://example.com/download/software2"
    }
  ];

  res.json(softwareData);
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
