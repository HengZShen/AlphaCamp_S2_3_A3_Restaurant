const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

// route : search
router.get('/', (req, res) => {

  const { keyword, searchType } = req.query

  if (searchType === '餐廳名字') {
    Restaurant.find({
      name: { $regex: `${keyword}`, $options: 'i' },
    })
      .lean()
      .then(restaurants => {
        if (restaurants.length === 0) {
          setTimeout(() => { res.render('noResult', { keyword, searchType }) }, 1000)

        } else {
          setTimeout(() => { res.render('index', { restaurants, keyword, searchType }) }, 1000)
        }
      })
      .catch(error => console.log(error))
  } else if (searchType === '餐廳種類') {
    Restaurant.find({
      category: { $regex: `${keyword}`, $options: 'i' },
    })
      .lean()
      .then(restaurants => {
        if (restaurants.length === 0) {
          setTimeout(() => { res.render('noResult', { keyword, searchType }) }, 1000)

        } else {
          setTimeout(() => { res.render('index', { restaurants, keyword, searchType }) }, 1000)
        }
      })
      .catch(error => console.log(error))
  } else if (searchType === '評價') {

    if (isNaN(Number(keyword))) {
      setTimeout(() => { res.render('noResult', { keyword, searchType }) }, 1000)
      return
    }

    Restaurant.find({
      rating: { $gte: Number(keyword) }
    })
      .lean()
      .then(restaurants => {
        if (restaurants.length === 0) {
          setTimeout(() => { res.render('noResult', { keyword, searchType }) }, 1000)

        } else {
          setTimeout(() => { res.render('index', { restaurants, keyword, searchType }) }, 1000)
        }
      })
      .catch(error => console.log(error))

  } else if (searchType === '區域') {
    Restaurant.find({
      location: { $regex: `${keyword}`, $options: 'i' }
    })
      .lean()
      .then(restaurants => {
        if (restaurants.length === 0) {
          setTimeout(() => { res.render('noResult', { keyword, searchType }) }, 1000)

        } else {
          setTimeout(() => { res.render('index', { restaurants, keyword, searchType }) }, 1000)
        }
      })
      .catch(error => console.log(error))
  }
})







module.exports = router