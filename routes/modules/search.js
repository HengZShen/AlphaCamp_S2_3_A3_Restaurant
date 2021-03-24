const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

// route : search
router.get('/', (req, res) => {

  const { keyword, searchType } = req.query

  if (searchType === 'name') {
    Restaurant.find({
      name: { $regex: `${keyword}`, $options: 'i' },
    })
      .lean()
      .then(restaurants => {
        if (restaurants.length === 0) {
          setTimeout(() => { res.render('noResult', { keyword }) }, 1000)

        } else {
          setTimeout(() => { res.render('index', { restaurants, keyword }) }, 1000)
        }
      })
      .catch(error => console.log(error))
  } else if (searchType === 'category') {
    Restaurant.find({
      category: { $regex: `${keyword}`, $options: 'i' },
    })
      .lean()
      .then(restaurants => {
        if (restaurants.length === 0) {
          setTimeout(() => { res.render('noResult', { keyword }) }, 1000)

        } else {
          setTimeout(() => { res.render('index', { restaurants, keyword }) }, 1000)
        }
      })
      .catch(error => console.log(error))
  } else if (searchType === 'rating') {
    Restaurant.find({
      rating: { $gte: Number(keyword) }
    })
      .lean()
      .then(restaurants => {
        if (restaurants.length === 0) {
          setTimeout(() => { res.render('noResult', { keyword }) }, 1000)

        } else {
          setTimeout(() => { res.render('index', { restaurants, keyword }) }, 1000)
        }
      })
      .catch(error => console.log(error))

  } else if (searchType === 'location') {
    Restaurant.find({
      location: { $regex: `${keyword}`, $options: 'i' }
    })
      .lean()
      .then(restaurants => {
        if (restaurants.length === 0) {
          setTimeout(() => { res.render('noResult', { keyword }) }, 1000)

        } else {
          setTimeout(() => { res.render('index', { restaurants, keyword }) }, 1000)
        }
      })
      .catch(error => console.log(error))

  }
})




module.exports = router