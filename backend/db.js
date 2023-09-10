const mongoose = require("mongoose");
require('dotenv').config();
const uri = process.env.MongoDB_URI;

async function DataBaseConnect() {
    console.log("Connnection in progress")
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(async () => {
            const FetchedData = await mongoose.connection.db.collection("FoodList");
            console.log('DataBase Connected ');
            console.log(FetchedData.find({}, (err, resp) => {

                if (err) { console.log("Error ") }

                else {
                    resp.toArray((err, res) => {

                        if (err) { console.log("err") }

                        else { console.log(res) }
                    })
                }

            }))


        }).catch((err) => {
            console.error('Error connecting ', err);
        });
}

module.exports = DataBaseConnect;