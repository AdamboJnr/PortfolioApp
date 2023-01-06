const userDetails = require('../models/portfolio')
const { createCustomError } = require('../errors/custom-error')


const login = async (req, res, next) => {
    try {
        // Get the details from user
        const { email, password } = req.body

        const user = await userDetails.findOne({ email })

        if(!user){
            next(createCustomError("Invalid Credentials", 403))
        }


    } catch (error) {
        // Get the details from user
        const { email, password } = req.body

        const user = await userDetails.findOne({ email })

        if(!user){
            next(createCustomError("Invalid Credentials", 403))
        }        
    }
}

const createUser = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const updateUser = async (req, res) => {
    console.log('User Updated...');
}

const deleteUser = async (req, res) => {
    console.log('Deleting the User..');
}

module.exports = {
    getUser, createUser, updateUser, deleteUser
}