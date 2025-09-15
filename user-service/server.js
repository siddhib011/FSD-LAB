// user-service/server.js


require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db'); 
const userRoutes = require('./routes/userRoutes');
//const authRoutes = require('./routes/authRoutes'); // ⬅️ Add this line

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
//app.use('/api/auth', authRoutes); // ⬅️ Add this line
app.use((req, res, next) => {
  console.log("Request:", req.method, req.url);
  next();
});

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`User Service running on port ${PORT}`);
  });
}).catch((err) => {
  console.error("MongoDB connection failed:", err.message);
});