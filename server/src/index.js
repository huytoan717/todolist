const path = require('path')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const route = require('./routes')

const port = 8081
const app = express()
// app.use(morgan('combined'))
app.use(cors())
app.use(express.urlencoded( { extended: true } ))
app.use(express.json())

const db = require('./config/db')
// Connect to DB
db.connect()

//Router
route(app)

app.listen(process.env.PORT || port, () => {
  console.log(`App listening on port ${port}`)
})