const mongoose = require('mongoose');
const mongoURL = "mongodb+srv://bsse1326:rizoniit@cluster0.uipuyr8.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        // Fetch data from the collection
        const fetched_data = mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find({}).toArray();
        // console.log(data);
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
    }
}

module.exports = mongoDB;
