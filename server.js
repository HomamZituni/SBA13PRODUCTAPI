const express = require('express');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

// Basic middleware
app.use(express.json());

// Basic test route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Zenith Product API is running!',
    port: PORT 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
