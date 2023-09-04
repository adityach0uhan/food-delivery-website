const mongoose = require("mongoose" );
require('dotenv').config();
const uri = process.env.MongoDB_URI;
// const uri = "mongodb://localhost:27017"

// Connect to MongoDB using Mongoose
function DataBaseConnect() {
    console.log("Connnection in progress")
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected ');
    }) .catch((err) => {
        console.error('Error connecting ',err);
    });
}

module.exports = DataBaseConnect;