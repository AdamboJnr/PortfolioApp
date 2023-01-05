const express = require('express')
const app = express()
const userRoute = require('./routes/portfolio')

app.use(express.json())

// Routes
app.use('/user', userRoute)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server listening to port: ${PORT}`);
})