
const Restaurant = require("../restaurant")
const restaurantData = require('../../restaurant.json').results

// mongodb connect
const db = require('../../config/mongoose')


db.once('open', () => {
  console.log('mongodb connected')

  Restaurant.create(restaurantData).then(() => {
    console.log('seed data created')
    db.close()
  }).catch(error => console.log('mongodb connection error'))


})
