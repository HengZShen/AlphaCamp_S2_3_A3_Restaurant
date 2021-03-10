// Include modules and files
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const restaurantData = require('./restaurant.json')


// set template engine
app.engine('handlebars', exphbs({ defaultLayout: "main" }))
app.set("view engine", 'handlebars')


// set static files
app.use(express.static('public'))

// route setting

// route : index
app.get('/', (req, res) => {

  res.render('index', { restaurants: restaurantData.results })
})

// route : show
app.get('/restaurants/:restaurant_id', (req, res) => {
  const id = req.params.restaurant_id
  const restaurant = restaurantData.results.find(shop => shop.id.toString() === id)

  res.render('show', { restaurant })
})

// route : search
app.get('/search', (req, res) => {
  const keyword = req.query.keyword.toLowerCase().trim()
  const restaurants = restaurantData.results.filter(shop => shop.name.toLowerCase().includes(keyword))

  res.render('index', { restaurants, keyword })

})


// start and listen server
app.listen(port, (req, res) => {
  console.log(`The server is running on http://localhost${port}`)
})