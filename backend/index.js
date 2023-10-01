const express = require('express');
const app = express();
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
app.use('/user', require('./Routes/createUser'))
app.use('/user', require('./Routes/login'))
app.use('/api',require('./Routes/FoodData'))

    

app.listen(5000, () => {
    console.log("App is listening on port 5000");
    // console.log(backendData)
})