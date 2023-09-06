const mongoose = require("mongoose" );
require('dotenv').config();
const uri = process.env.MongoDB_URI;


async function DataBaseConnect() {
    console.log("Connnection in progress")
  await  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('DataBase Connected ');
        await const data=

    }).catch((err) => {
        console.error('Error connecting ',err);
    });
}

module.exports = DataBaseConnect;