const mongoose = require("mongoose" );
require('dotenv').config();
const uri = process.env.MongoDB_URI;

// Connect to MongoDB using Mongoose
function DataBaseConnect() {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected ');
    }) .catch((err) => {
        console.error('Error connecting ',err);
    });
}

module.exports = DataBaseConnect;