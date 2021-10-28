const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/userSchema');
const routerApp = express.Router();

routerApp.get('/', (req, res) => {
    res.send('Welcome to my MERN server From Router.')
});
routerApp.post('/register', (req, res) => {
    // res.send({message: req.body})
    // console.log(req.body);
    // wrritten in ES6 style
    const { name, email, phone, work, password, cpassword } = req.body;

    // if user not fill the register form properly so 
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "please fill the form properly!!" });
    }

    User.findOne({ email: email })
        .then((userExist) => {
            if (userExist) {
                return res.status(422).json({ error: "Email id already Exist" })
            }
            const user = new User({ name, email, phone, work, password, cpassword });
            // hashing process here ---------------------------------------------------------------


            user.save().then(() => {


                res.status(201).json({ message: "User Register Successfully" });
            })
                .catch((err) => {
                    res.status(500).json({ error: "failed to register" })
                })
        })
        .catch(err => { console.log(err) });
});



// route for login page=======================================================================
routerApp.post('/login', async (req, res) => {
    let token;
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "plz fill the form" })
        }
        const userLogin = await User.findOne({ email: email });
        // console.log(userLogin);

        // for using password and email use safely
        if (userLogin) {
            // checking userlogin password using bcrypt.compare method==
            const isMatch = await bcrypt.compare(password, userLogin.password);
            console.log('userlogin here');
            // genarate auto token using 
            token = await userLogin.generateAuthToken();
            console.log(token);

            // add cookie-->
            res.cookie("jwtTokens", token, {
                expires: new Date(Date.now() + 25892000000)
            })

            if (!isMatch) {
                res.status(400).json({ message: "User error" })
            }
            else {
                res.json({ message: "User Login successfully." })
            }
        } else {
            res.status(400).json({ message: "User error" })
        }

    } catch (err) {
        console.log(err);
    }
})

module.exports = routerApp;
