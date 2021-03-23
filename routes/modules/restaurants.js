const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')



// route : new restaurant
router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', (req, res) => {
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
  const data = req.body
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
router.get('/:id/delete', (req, res) => {
  const id = req.params.id
  Restaurant.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router