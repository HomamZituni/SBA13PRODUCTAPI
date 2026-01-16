const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/connection'); 
const productRoutes = require('./routes/productRoutes');


dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.json({ 
    message: 'Zenith Product API is running!',
    port: PORT 
  });
});

app.get('/test-model', (req, res) => {
  const Product = require('./models/Product');
  res.json({ 
    message: 'Product model loaded!',
    fields: Object.keys(Product.schema.obj)
  });
});

// DB connection 
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
