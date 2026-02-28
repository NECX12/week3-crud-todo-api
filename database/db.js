const mongoose = require("mongoose");

connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("DB connection Failed", error)
        process.exit
    }
};

module.exports = connectDB;