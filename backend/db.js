const mongoose = require("mongoose");
require('dotenv').config();
const uri = process.env.MongoDB_URI;

console.log("Database Connnection in progress")
let BackendData = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log("Database is Connected")
       
    }).catch((err) => {
        console.error('Error connecting ', err);
    });


module.exports =BackendData

