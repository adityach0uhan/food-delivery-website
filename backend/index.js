const express = require('express');
const app = express();
const DataBaseConnect = require('./db');


app.get('/', (req,res) => {
    res.send("Home Page")
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/db',require('./Routes/createUser'))

DataBaseConnect();
app.listen(3000, () => {
    console.log("App is listening on port 3000");
})