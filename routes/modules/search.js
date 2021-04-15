const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')
const keyForSearch = require('../../public/javascripts/routes/search')
const keyForSort = require('../../public/javascripts/routes/sort')

router.get('/', (req, res) => {

  const { keyword, searchType, sortType
  } = req.query
  const { name, category, rating, location } = keyForSearch(searchType, keyword)
  const { nameOrient, ratingOrient } = keyForSort(sortType)
  let document

  console.log('0')

  // 評價 不可讀取數字外的內容
  if (searchType === '評價') {

    if (isNaN(Number(keyword))) {
      setTimeout(() => { res.render('noResult', { keyword, searchType }) }, 1000)
      return
    }
  }

  // query
  document = Restaurant.find({
    name: { $regex: name, $options: 'i' }, category: { $regex: category, $options: 'i' }, rating: { $gte: rating }, location: { $regex: location, $options: 'i' }
  })

  // console.log('1')
  if (nameOrient) {
    document = document.sort(nameOrient)
    // console.log('name')
  } else if (ratingOrient) {
    document = document.sort(ratingOrient)
    // console.log('rating')
  }

  // console.log('2')
  document
    .lean()
    .then(restaurants => {
      if (restaurants.length === 0) {
        setTimeout(() => { res.render('noResult', { keyword, searchType }) }, 1000)
      } else {
        setTimeout(() => { res.render('index', { restaurants, keyword, searchType, sortType }) }, 1000)
      }
    })
    .catch(error => console.log(error))

  // console.log('3')
})



module.exports = router