const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  console.log('Root endpoint accessed');
  res.send('AI Interviewer API is running');
});

// Add a test route
app.get('/api/test', (req, res) => {
  console.log('Test endpoint accessed');
  res.json({ message: 'API is working correctly' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});