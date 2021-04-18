const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')
const keyForSearch = require('../../public/javascripts/routes/search')
const keyForSort = require('../../public/javascripts/routes/sort')


function getQuery(name, category, rating, location) {
  const query = Restaurant.find({
    name: { $regex: name, $options: 'i' }, category: { $regex: category, $options: 'i' }, rating: { $gte: rating }, location: { $regex: location, $options: 'i' }
  })
  return query
}

function getPromise(query, nameOrient, ratingOrient) {
  if (nameOrient) {
    query = query.sort(nameOrient)

  } else if (ratingOrient) {
    query = query.sort(ratingOrient)
  }
  return query.lean().then()
}

router.get('/', (req, res) => {

  const { keyword, searchType, sortType
  } = req.query
  const { name, category, rating, location } = keyForSearch(searchType, keyword)
  const { nameOrient, ratingOrient } = keyForSort(sortType)

  let query = getQuery(name, category, rating, location)
  let promise = getPromise(query, nameOrient, ratingOrient)

  promise.then(restaurants => {

    if (restaurants.length === 0) {
      setTimeout(() => { res.render('noResult', { keyword, searchType }) }, 1000)
    } else {
      setTimeout(() => { res.render('index', { restaurants, keyword, searchType, sortType }) }, 1000)
    }
  }).catch(error => console.log(error))
})



module.exports = router