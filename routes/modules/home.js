const express = require('express')

const router = express.Router()


const Restaurant = require('../../models/restaurant')

// route : index
router.get('/', (req, res) => {

  Restaurant.find()
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))

})


// exception
router.get('/*', (req, res) => {

  const url = req.url
  res.render('undefinedRoute', { url, layout: 'forUndefined' })

})



module.exports = router