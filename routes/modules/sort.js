const express = require('express')
const router = express.Router()
const restaurant = require('../../models/restaurant')


router.get('/rating-h2l', (req, res) => {

  restaurant.find()
    .sort({ rating: 'desc' })
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))

})


router.get('/rating-l2h', (req, res) => {

  restaurant.find()
    .sort({ rating: 'asc' })
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))

})



router.get('/name-ascending', (req, res) => {
  restaurant.find()
    .sort('name')
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))

})



router.get('/name-descending', (req, res) => {
  restaurant.find()
    .sort('-name')
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))

})


module.exports = router