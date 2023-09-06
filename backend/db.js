const mongoose = require("mongoose");
require('dotenv').config();
const uri = process.env.MongoDB_URI;

async function DataBaseConnect() {
    console.log("Connnection in progress")
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(async () => {
            console.log('DataBase Connected ');
            const FetchedData = await mongoose.connection.db.collection("FoodList");
            await FetchedData.find({}).toArray(function (err, res) {
                if (err) {
                    console.log("Error Occurred while fetching the data", err)
                }
                else {
                    console.log("wait we are fetching the data ")
                    console.log(res)
                }
            })

        }).catch((err) => {
            console.error('Error connecting ', err);
        });
}

module.exports = DataBaseConnect;