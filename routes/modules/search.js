const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')



// route : search
router.get('/', (req, res) => {

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

module.exports = router
