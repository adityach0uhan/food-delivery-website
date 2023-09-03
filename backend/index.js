const express = require('express');
const DataBaseConnect = require('./db');
const app = express();

app.get('/', () => {
    console.log("Working");
    DataBaseConnect();
})

app.listen(3000, () => {
    console.log("App is listening on port 3000");
})