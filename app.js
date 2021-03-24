// express server
const express = require('express')
const app = express()
const port = 3000

// handlebars
const exphbs = require('express-handlebars')

// set template engine
app.engine('handlebars', exphbs({ defaultLayout: "main" }))
app.set("view engine", 'handlebars')

// set static files
app.use(express.static('public'))

// bodyParser 
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

// method-override
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

// mongodb connect
require('./config/mongoose')

// Router 
const routes = require('./routes')
app.use(routes)




// start and listen server
app.listen(port, (req, res) => {
  console.log(`The server is running on http://localhost${port}`)
})