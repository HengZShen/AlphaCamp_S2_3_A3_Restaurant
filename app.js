// Include modules and files
const express = require('express')
const app = express()
const port = 3000
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


// route setting

// route : index
app.get('/', (req, res) => {

  Restaurant.find()
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))

})

// route : show
app.get('/restaurants/:restaurant_id', (req, res) => {
  const id = req.params.restaurant_id
  Restaurant.findById(id)
    .lean()
    .then(restaurant => res.render('show', { restaurant }))
    .catch(error => console.log(error))
})

// route : search
app.get('/search', (req, res) => {

  // const keyword = req.query.keyword.toLowerCase().trim()
  // const restaurants = restaurantData.results.filter(shop => shop.name.toLowerCase().includes(keyword))


  if (restaurants.length === 0) {
    setTimeout(() => { res.render('noResult', { keyword }) }, 1000)

  } else {
    setTimeout(() => { res.render('index', { restaurants, keyword }) }, 1000)
  }
})

// route : new restaurant
app.get('/restaurant/new', (req, res) => {
  res.render('new')
})

app.post('/restaurants', (req, res) => {
  const data = req.body
  Restaurant.create({
    name: data.name,
    name_en: data.name_en,
    category: data.category,
    image: data.image,
    location: data.location,
    phone: data.phone,
    google_map: data.google_map,
    rating: data.rating,
    description: data.description
  }).then(() => res.redirect('/'))
    .catch(error => console.log(error))
})


// edit one restaurant
app.get('/restaurants/:id/edit', (req, res) => {
  const id = req.params.id
  Restaurant.findById(id)
    .lean()
    .then(restaurant => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})

app.post("/restaurants/:id/edit", (req, res) => {
  const id = req.params.id
  const data = req.body
  console.log(req.body)
  Restaurant.findById(id)
    .then(restaurant => {
      restaurant.name = data.name
      restaurant.name_en = data.name_en
      restaurant.category = data.category
      restaurant.image = data.image
      restaurant.location = data.location
      restaurant.phone = data.phone
      restaurant.google_map = data.google_map
      restaurant.rating = data.rating
      restaurant.description = data.description
      restaurant.save()
    }).then(() => res.redirect(`/restaurants/${id}`))
    .catch(error => console.log(error))
}
)

// delete a restaurant
app.get('/restaurants/:id/delete', (req, res) => {
  const id = req.params.id
  Restaurant.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// start and listen server
app.listen(port, (req, res) => {
  console.log(`The server is running on http://localhost${port}`)
})