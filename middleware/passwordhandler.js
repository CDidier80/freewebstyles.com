const bcrypt = require('bcrypt')
require('dotenv').config()

//declare number of hashings (salt rounds)
const saltRounds = parseInt(process.env.SALT_ROUNDS) //parse int used because all thigns from env are strings

// this method is used only once for creating a new user account. It is called in UserController.js in the CreateUser() function.
// It is used to "hash" the password -- turning the user's entered password into an undecryptable hashed user digest
const generatePassword = async (password) => {    // hashing takes time
    console.log('reached generatePassword() hashing method in passwordhandler.js')
    const password_digest = await bcrypt.hash(password, saltRounds)
    return password_digest
}

// this method is used only once for creating a new user account. It is called in UserController.js in the SignInUser() function.
// It's purpose is to repeat the hashing process on the user's raw-text entered password to confirm that the result matches the password
// digest stored in our database records. It's the encrpytion equivalent of "user-entered-password === our-record-of-their-password"
const checkPassword = async (sentPassword, storedPassword) => {
    const passwordValid = await bcrypt.compare(sentPassword, storedPassword)  // bcrypt rehashes the password to make sure the result is the same
    return passwordValid // a boolean
}

module.exports = {
    generatePassword, 
    checkPassword
}