const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/connection'); // Add this line

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    message: 'Zenith Product API is running!',
    port: PORT 
  });
});

// Connect to DB then start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
