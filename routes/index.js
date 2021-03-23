const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const restaurants = require('./modules/restaurants')
const search = require('./modules/search')

// 若網址結構符合相符合的字串， 則將user的request導向該模組 做進一步處理
router.use('/', home)
router.use('/restaurants', restaurants)
router.use('/search', search)








module.exports = router