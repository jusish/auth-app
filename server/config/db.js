const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    const uri = process.env.MONGO_URI;
    console.log('MongoDB URI:', uri); // Log the URI
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
