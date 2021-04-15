const express = require('express')

const router = express.Router()


const Restaurant = require('../../models/restaurant')


// route : index
router.get('/', (req, res, next) => {

  Restaurant.find()
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(next)

})


module.exports = router