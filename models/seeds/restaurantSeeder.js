
const Restaurant = require("../restaurant")
const restaurantData = require('../../restaurant.json')

// mongodb connect
const db = require('../../config/mongoose')


db.once('open', () => {
  console.log('mongodb connected')

  for (let i = 0; i < restaurantData.results.length; i++) {
    const { name, name_en, category, image, location, phone, google_map, rating, description } = restaurantData.results[i]

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
    })
  }
  console.log('done')

})
