//importing mongoose module
const connectDB = require('./database/connect')


const express = require('express')
const app = express()

//importing router
const flights = require('./routes/flights')

//setup .env
require('dotenv').config()

//setup middleware
app.use(express.json())

//implementing router
app.use('/api/v1/flights', flights)

app.get('/hello', (req, res) => {
    res.send('My Nodejs Project')
})

const port = 8080

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()
