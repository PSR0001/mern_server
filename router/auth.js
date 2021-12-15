const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Authenticate = require('../middleware/authenticate')


const User = require('../models/userSchema');
const routerApp = express.Router();

routerApp.get('/', (req, res) => {
    res.send('Welcome to my MERN server From Router.')
});
routerApp.post('/register', async (req, res) => {
    try {
        // wrritten in ES6 style
        const { name, email, phone, work, password, cpassword } = req.body;

        // if user not fill the register form properly so 
        if (!name || !email || !phone || !work || !password || !cpassword) {
            return res.json({ status: 422, massage: "please fill the form properly!!" });
        }
        if (req.body.password === req.body.cpassword) {
            const userExist = await User.findOne({ email: email })

            if (userExist) {
                return res.json({ status: 422, message: "Email id already Exist" })
            }
            const user = new User({ name, email, phone, work, password, cpassword });
            // hashing process here -------------------------------------------------

            user.save().then(() => {

                res.status(201).json({ status: 201, message: "User Register Successfully" });
            })
                .catch((err) => {
                    res.status(500).json({ status: 500, message: "failed to register" })
                })

        }
        else{
            res.json({status:422, message:'Your both passwaord are not same'})
        }

    }
    catch (err) { console.log(err) }
});



// route for login page=======================================================================
routerApp.post('/login', async (req, res) => {
    let token;
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.json({ status: 400, message: "plz fill the form" })
        }

        const userLogin = await User.findOne({ email: email });

        // for using password and email use safely
        if (userLogin) {
            // checking userlogin password using bcrypt.compare method==
            const isMatch = await bcrypt.compare(password, userLogin.password);

            // genarate auto token using 

            if (isMatch) {
                // add cookie-->
                token = await userLogin.generateAuthToken();
                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 25892000000)
                })

                res.json({ message: "User Login successfully." })
                // console.log(token);
            }
            else {
                res.json({ status: 400, message: "Fill the Form Correctly" })
            }
        }
        else {
            res.json({ status: 400, message: "Fill the Form Correctly" })
        }

    } catch (err) {
        console.log('This is /login error ! : ' + err);
    }
})

// about Us page here
routerApp.post('/about', Authenticate, (req, res) => {
    res.send(req.rootUser)
})

module.exports = routerApp;
