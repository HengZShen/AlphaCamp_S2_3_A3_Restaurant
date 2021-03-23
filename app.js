// Include modules and files
const express = require('express')
const app = express()
const port = 3000


// bodyParser 
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

// Router 
const routes = require('./routes')
app.use(routes)

// handlebars
const exphbs = require('express-handlebars')


// Restaurant model
const Restaurant = require('./models/restaurant')


// mongodb connect
require('./config/mongoose')

// set template engine
app.engine('handlebars', exphbs({ defaultLayout: "main" }))
app.set("view engine", 'handlebars')


// set static files
app.use(express.static('public'))


// start and listen server
app.listen(port, (req, res) => {
  console.log(`The server is running on http://localhost${port}`)
})