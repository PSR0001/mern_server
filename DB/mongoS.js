require('dotenv').config();
const mongoose = require('mongoose');

// mongoDb Part
// const DB = 'mongodb atlus link'

const DB = 'mongodb+srv://parthasingharoy:0icnliidJ3I5RM8O@cluster0.1yiqn.mongodb.net/mernStack?retryWrites=true&w=majority';

mongoose.connect(DB)
.then(() => {
    console.log(`You are now connected to the MongoDB Atlas`)
})
.catch((err)=>{
    console.log(`Not Connected! ${err}`)
})

// console.log('in the mongoS file')

module.exports = mongoose;