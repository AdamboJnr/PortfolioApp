const mongoose = require('mongoose')

const portfolioSchema = new mongoose.model({
    name: {
        required: [true, 'Please Provide the names'],
        type: String,
        maxlength: [100, 'Name Can not be more than 100 characters']
    },
    email: {
        type: String,
        required: [true, 'Please Provide the Email'],
        maxlength: [100, 'Name Can not be more than 100 characters']
    },
    password: {
        type: String,
        required: [true, 'Please Provide the Password'],
        maxlength: [20, 'Name Can not be more than 100 characters'],
        minlength: [8, 'Password Can not be less than 8 characters']        
    }
})

module.exports = mongoose.model('Detail', portfolioSchema)