const express = require('express');
const app = express();
const DataBaseConnect = require('./db');
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
}));


app.get('/', (req, res) => {
    res.send("Home Page")
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/db', require('./Routes/createUser'))
app.use('/db',require('./Routes/login'))

DataBaseConnect();
app.listen(5000, () => {

    console.log("App is listening on port 5000");
})