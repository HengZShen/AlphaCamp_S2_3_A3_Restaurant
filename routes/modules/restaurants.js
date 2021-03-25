const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')
const { route } = require('./home')



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
    .catch(error => {

      console.log(error)

      // exception
      const url = req.url
      res.render('undefinedRoute', { url, layout: 'forUndefined' })


    })
})



// edit one restaurant
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  Restaurant.findById(id)
    .lean()
    .then(restaurant => res.render('edit', { restaurant }))
    .catch(error => {
      console.log(error)
      const url = req.url
      res.render('undefinedRoute', { url, layout: 'forUndefined' })
    })
})

router.put("/:id", (req, res) => {
  const id = req.params.id
  console.log(req.body)
  const { name, name_en, category, image, location, phone, google_map, rating, description } = req.body
  Restaurant.findById(id)
    .then(restaurant => {

      //　由於解構賦值創造的新變數name，儲存的值為key-value的value，
      //  ex : name = 'name'  新變數name 並不是一個Object 
      // 不能直接使用Object.assign的方法，
      // 因此利用 object literal extension，以 { name }  的方法 
      // 做出一個物件 { name(key) : name(value 為之前儲存的變數)}

      Object.assign(restaurant, { name, name_en, category, location, phone, google_map, rating, description })
      console.log(restaurant)

      restaurant.save()
    }).then(() => res.redirect(`/restaurants/${id}`))
    .catch(error => console.log(error))
}
)

// delete a restaurant
router.delete('/:id', (req, res) => {
  const id = req.params.id
  Restaurant.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})


// exception
router.get('/*', (req, res) => {

  const url = req.url
  res.render('undefinedRoute', { url, layout: 'forUndefined' })
})


module.exports = router