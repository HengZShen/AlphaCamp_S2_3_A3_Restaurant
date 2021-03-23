const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')



// route : search
router.get('/search', (req, res) => {

  const keyword = req.query.keyword.toLowerCase().trim()

  Restaurant.find({ name: { $regex: `^${keyword}`, $options: 'i' } })
    .lean()
    .then(restaurants => {
      if (restaurants.length === 0) {
        setTimeout(() => { res.render('noResult', { keyword }) }, 1000)

      } else {
        setTimeout(() => { res.render('index', { restaurants, keyword }) }, 1000)
      }
    })
    .catch(error => console.log(error))
})

// route : new restaurant
router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', (req, res) => {

  const { name, name_en, category, image, location, phone, google_map, rating, description } = req.body

  Restaurant.create({
    name,
    name_en,
    category,
    image,
    location,
    phone,
    google_map,
    rating,
    description
  }).then(() => res.redirect('/'))
    .catch(error => console.log(error))
})


// route : show

router.get('/:restaurant_id', (req, res) => {
  const id = req.params.restaurant_id
  Restaurant.findById(id)
    .lean()
    .then(restaurant => res.render('show', { restaurant }))
    .catch(error => console.log(error))
})



// edit one restaurant
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  Restaurant.findById(id)
    .lean()
    .then(restaurant => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})

router.post("/:id/edit", (req, res) => {
  const id = req.params.id
  const { name, name_en, category, image, location, phone, google_map, rating, description } = req.body
  Restaurant.findById(id)
    .then(restaurant => {

      restaurant.name = name
      restaurant.name_en = name_en
      restaurant.category = category
      restaurant.image = image
      restaurant.location = location
      restaurant.phone = phone
      restaurant.google_map = google_map
      restaurant.rating = rating
      restaurant.description = description

      restaurant.save()
    }).then(() => res.redirect(`/restaurants/${id}`))
    .catch(error => console.log(error))
}
)

// delete a restaurant
router.get('/:id/delete', (req, res) => {
  const id = req.params.id
  Restaurant.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})






module.exports = router