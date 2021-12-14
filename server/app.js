const express = require('express');
const dotEnv = require('dotenv');
const mongoose = require('../DB/mongoS');
const app = express();

dotEnv.config({path:'../.env'})

// i had to receive data in json format so for that use a middleware
app.use(express.json());

// import router part from router folder
app.use(require('../router/auth'));

// securing port number using .env
const PORT=process.env.PORT;

// express app listening 
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})

