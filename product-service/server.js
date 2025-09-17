const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const { PORT } = require('./utils/config');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

// Connect DB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Product service running on port ${PORT}`);
});
