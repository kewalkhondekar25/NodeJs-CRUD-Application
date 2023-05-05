/*FlightsAPI*/

//setup .env
require('dotenv').config()

//importing mongoose module
const connectDB = require('./database/connect')


const express = require('express')
const app = express()
app.use(cors())

//importing router
const flights = require('./routes/flights')


//extra security package
const helmet = require('helmet')
const cors = require("cors")
const xss = require('xss-clean')



//setup middleware
app.use(express.json())


//implementing router
app.use('/api/v1/flights', flights)

app.use(helmet())

app.use(xss())

app.get('/', (req, res) => {
    res.send('<h1 style = " background-color:#F5F5F7; color:#7AA874; text-align:center; font-family: Helvetica, Arial; font-weight: 600px; font-size:48px; color:black; margin-top: 250px;">Welcome Onboard!</br><p style="color:grey; font-size:35px"> <a href="#">FlightsAPI</a></p></h1>')
})

const port = process.env.PORT || 8080

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()
/*FlightsAPI*/