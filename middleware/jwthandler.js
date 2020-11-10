
// DO NOT PUT SENSITIVE INFORMATION IN JWT. TOKENS CAN BE DECIPHERED EASILY ONLINE

const jwt = require('jsonwebtoken')
require('dotenv').config()   // indicates use of .env


const secretKey = process.env.SECRET_KEY

const getToken = (req, res, next) => {
    const token = req.headers['authorization'].split(' ')[1]  // all requests have headers, some default others added by you. Split separates the word "bearer" from the token "alksndgoiu137q6skxjfhsg" 
    // example "Bearer 87nfkajhjhgd76947dt928"  --- >   "Bearer"   "87nfkajhjhgd76947dt928"
    res.locals.token // locals exist along the back-end routes within .res - > response sent. always ex
    next() 
}

const verifyToken = (req,res,next) => {
    let token = res.locals.token
    jwt.verify(token, secretKey, (err, tkn) => {
    if(err){
        return res.status(401).json({msg: 'Invalid Token'})  // in real life, use something like "unauthorized" as not to give away why the attacker failed
    }})
}

const createToken = (req,res) =>{
    const token = jwt.sign(res.locals.payload, secretKey)
    res.send({user: res.locals.payload, token})
}

module.exports = {
    createToken, 
    verifyToken, 
    getToken
}