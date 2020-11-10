const bcrypt = require('bcrypt')
require('dotenv').config()

//declare number of hashings (salt rounds)

const saltRounds = parseInt(process.env.SALT_ROUNDS) //parse int used because all thigns from env are strings

const generatePassword = async (password) => {    // hashing takes time
     const password_digest = await bcrypt.hash(password, saltRounds)
     return password_digest
}

const checkPassword = async (sentPassword, storedPassword) => {
    const passwordValid = await bcrypt.compare(sentPassword, storedPassword)  // bcrypt rehashes the password to make sure the result is the same
    return passwordValid // a boolean
}

module.exports = {
    generatePassword, 
    checkPassword
}