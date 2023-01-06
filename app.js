const express = require('express')
const app = express()
const userRoute = require('./routes/portfolio')
const connectDB = require('./db/connect')
const mongoose = require('mongoose')
require('dotenv').config

app.use(express.json())

// Routes
app.use('/user', userRoute)

const PORT = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true, 
            useFindAndModify: true
        })

        const conn = mongoose.connection

        conn.once('error', console.error.bind('error', 'Failed to connect to Database'))

        conn.on('open', () => {
            console.log('Connected to daatabase succesfully')
        })

        app.listen(PORT, () => console.log(`Server listening to port: ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

