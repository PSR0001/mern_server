const express = require('express');
const dotEnv = require('dotenv');
// const mongoose = require('mongoose');
const mongoose = require('../DB/mongoS');
const app = express();

dotEnv.config({path:'../.env'})

// require mongoDb part code from db folder


// import userSchema from module folder
// const User=require('../models/userSchema')

// i had to receive data in json format so for that use a middleware
app.use(express.json());

// import router part from router folder
app.use(require('../router/auth'));

// securing port number using .env
const PORT=process.env.PORT;

// making middleware
const middleware=(req,res,next)=>{
    console.log('You are in Middleware');
    next();
}

// Api request-->
// app.get('/', (req, res) => {
//     res.send('Welcome to my MERN server.')
// })
app.get('/about', middleware, (req, res) => {
    res.send('Welcome to my MERN server.')
})
app.get('/signin', (req, res) => {
    res.cookie("testcase","ParthaSinghaRoy")
    res.send('Welcome to my MERN server.')
})
app.get('/signup', (req, res) => {
    res.send('Welcome to my MERN server.')
})

// express app listening 
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})

