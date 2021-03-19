const mongoose = require('mongoose')
const Restaurant = require("../restaurant")
const restaurantData = require('../../restaurant.json')

mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  console.log('mongodb connected')

  for (let i = 0; i < restaurantData.results.length; i++) {
    const data = restaurantData.results[i]
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
    })
  }
  console.log('done')

})