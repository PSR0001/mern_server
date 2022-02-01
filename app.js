const express = require('express');
const dotEnv = require('dotenv');
const mongoose = require('./DB/mongoS');
const path = require('path');
const app = express();
// securing port number using .env
const PORT=process.env.PORT || 3000;
dotEnv.config({path:'../.env'})

// i had to receive data in json format so for that use a middleware
app.use(express.json())

// import router part from router folder
app.use(require('./router/auth'));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// express app listening 
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})