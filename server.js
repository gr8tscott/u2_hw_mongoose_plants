const express = require('express')
const routes = require('./routes')
const db = require('./db')
const logger = require('morgan')
// const plant = require('./models/plant')

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())

app.use(logger('dev'))

// app.use() middleware here ^ ///////////////////

app.use('/api', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
