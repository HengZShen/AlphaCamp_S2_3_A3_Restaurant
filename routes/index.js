const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const restaurants = require('./modules/restaurants')
const search = require('./modules/search')
// const sort = require('./modules/sort')


// 若網址結構符合相符合的字串， 則將user的request導向該模組 做進一步處理
router.use('/restaurants/search', search)
router.use('/restaurants', restaurants)
router.use('/', home)
// 接受以上route都無法匹配的path，產生錯誤，進到app.js的error-handling middleware
router.get('/*', (req, res) => {
  throw new Error('wrong URL')
})


module.exports = router