const mongoose = require('mongoose');
const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_DB_NAME } = require('../utils/config');
const MONGO_URI = "mongodb+srv://ownedbysiddhi_db_user:siddhi12@cluster0.txpr85s.mongodb.net/";


const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log('MongoDB connected failed:', error);
    }
}

module.exports = connectDB;