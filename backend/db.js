const mongoose = require("mongoose");
require('dotenv').config();
const uri = process.env.MongoDB_URI;

async function DataBaseConnect() {
    console.log("Database Connnection in progress")
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(async () => {
            console.log("Database is Connected")
            const collection = mongoose.connection.db.collection('FoodList');
            const result = await collection.find({}).toArray();
        }).catch((err) => {
            console.error('Error connecting ', err);
        });
}

module.exports = DataBaseConnect;