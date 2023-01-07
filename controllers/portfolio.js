const userDetails = require('../models/portfolio')
const { createCustomError } = require('../errors/custom-error')
const bcrypt = require('bcrypt')

const login = async (req, res, next) => {
    try {
        // Get the details from user
        const { email, password } = req.body

        const user = await userDetails.findOne({ email })

        if(!user){
            next(createCustomError("Invalid Credentials", 403))
        }

        const isMatch = await bcrypt.compare(password, user.password )

        if(!isMatch){
            next(createCustomError('Invalid Credentials', 403))
        }

        res.status(200).json({ message: 'Login Succesful' })

    } catch (error) {
        console.log(error)
    }
}

// Function to Create User
const createUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body

        // Validate the user doesn't already exist
        let user = userDetails.findOne({ email })

        if(user){
            next(createCustomError('Email Already Exists', 400))
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const savedUser = await userDetails.create({ name, email, password: hashedPassword })

        res.status(200).json({ savedUser })

    } catch (error) {
        console.log(error)
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params

        const user = await userDetails.findOneAndUpdate( { id }, req.body, { new: true, runValidators: true })

        if(!user){
            next(createCustomError("User Doesn't exist"))
        }

        res.status(200).json({ user })
    } catch (error) {
        console.log(error)
    }
}

const deleteUser = async (req, res,next) => {
    try {
        const { id } = req.params

        const deletedUser = await userDetails.findOneAndDelete({ _id: id })
    
        if(!deletedUser){
            next(createCustomError("User Doesn't Exist"))
        }
    
        res.status(200).json({ deletedUser, message: 'Deleted Succesfully'})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    login, createUser, updateUser, deleteUser
}