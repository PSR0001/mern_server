const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');
const dotEnv = require('dotenv');
dotEnv.config({path:'../.env'})
// const cookieParser = require('cookie-parser')



// const User = require('../')
const Authenticate = async(req,res,next)=>{
    
    try{        
        const token = req.cookies.jwtTokens;
        console.log(token)
        const verifyToken = jwt.verify(token.process.env.SECRT_KEY)
     
        const rootUser = await User.findOne({_id:verifyToken._id, "tokens.token":token})
        console.log(rootUser)
        
        
        if (!rootUser) {
            throw new Error('user not found')            
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id

    }catch(err){
        res.send('Unauturised : No token provided!')
        console.log('this is error'+err)
    }

    next();
}


module.exports = Authenticate;