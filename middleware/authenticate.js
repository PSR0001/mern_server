const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');
const dotEnv = require('dotenv');
dotEnv.config({ path: '../.env' })
// const cookieParser = require('cookie-parser')



// const User = require('../')
const Authenticate = async (req, res, next) => {
    // console.log(req.json)
    try {


        // const token = await req.headers.cookie.jwtokwn;
        const tokennn = await req.headers.cookie;
        if (tokennn.length > 80) {
        const tokenn = tokennn.split(" ")[1]
        const token = tokenn.split("=")[1]

        const verifyToken = jwt.verify(token, process.env.SECRT_KEY)

        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token })

        if (!rootUser) {
            throw new Error('user not found')

        }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id
    }
   

    } catch (err) {
        res.send({status:401, message: 'Unauturised : No token provided!' })
        console.log('this is error' + err)
    }

    next();
}


module.exports = Authenticate;