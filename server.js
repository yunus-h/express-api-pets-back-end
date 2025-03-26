const dotenv = require ('dotenv')
dotenv.config()

const express = require ('express')
const app = express()
const mongoose = require('mongoose')
const logger = require('morgan')
const cors = require('cors')

const PORT = 3000

const petRouter = require('./controllers/pets.js')

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}`)
})

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())
app.use(logger('dev'))

app.use('/pets', petRouter)

app.listen (PORT, () => {
    console.log('Express App is Ready!')
})
