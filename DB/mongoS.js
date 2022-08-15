
const mongoose = require('mongoose');
const path = require("path")
// require('dotenv').config({ path: path.resolve(__dirname,'../.env') })
require('dotenv').config({ path: path.resolve(__dirname,'../.env') })


const DB = process.env.DATABASE

// if(){
//     console.log("ok");
// }else{
//     console.log("false");
// }

mongoose.connect(process.env.DATABASE)
.then(() => {
    console.log(`You are now connected to the MongoDB Atlas`)
})
.catch((err)=>{
    console.log(`Not Connected! ${err}`)
})

// console.log('in the mongoS file')

module.exports = mongoose;