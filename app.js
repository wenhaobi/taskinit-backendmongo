const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const cors = require('cors');
//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const tasksRoute = require('./routes/tasks');

app.use('/tasks', tasksRoute);



//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});



//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
    console.log('connected to DB!')
);

//How do we start listening to the server
app.listen(3000);