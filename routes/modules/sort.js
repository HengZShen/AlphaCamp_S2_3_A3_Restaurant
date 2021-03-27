const express = require('express')
const router = express.Router()
const restaurant = require('../../models/restaurant')


router.get('/', (req, res) => {
  console.log(req.query.sortType)
  const { sortType
  } = req.query


  if (sortType === "評價 高-低") {
    restaurant.find()
      .sort({ rating: 'desc' })
      .lean()
      .then(restaurants => res.render('index', { restaurants, sortType }))
      .catch(error => console.log(error))

  } else if (sortType === '評價 低-高') {

    restaurant.find()
      .sort({ rating: 'asc' })
      .lean()
      .then(restaurants => res.render('index', { restaurants, sortType }))
      .catch(error => console.log(error))

  } else if (sortType === "名字 A-Z") {
    restaurant.find()
      .sort('name')
      .lean()
      .then(restaurants => res.render('index', { restaurants, sortType }))
      .catch(error => console.log(error))

  } else if (sortType === "名字 Z-A") {

    restaurant.find()
      .sort('-name')
      .lean()
      .then(restaurants => res.render('index', { restaurants, sortType }))
      .catch(error => console.log(error))
  }

})


module.exports = router