// Include modules and files
const express = require('express')
const app = express()
const port = 3000


// Router 
const routes = require('./routes')
app.use(routes)

// handlebars
const exphbs = require('express-handlebars')

// bodyParser 
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

// Restaurant model
const Restaurant = require('./models/restaurant')


// connect to mongoDB through mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  console.log('mongodb connected')
})

// set template engine
app.engine('handlebars', exphbs({ defaultLayout: "main" }))
app.set("view engine", 'handlebars')


// set static files
app.use(express.static('public'))


// start and listen server
app.listen(port, (req, res) => {
  console.log(`The server is running on http://localhost${port}`)
})