const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')




// route : new restaurant
router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', (req, res) => {

  Restaurant.create(req.body).then(() => res.redirect('/'))
    .catch(error => console.log(error))

})


// route : show
router.get('/:restaurant_id', (req, res, next) => {
  const id = req.params.restaurant_id
  Restaurant.findById(id)
    .lean()
    .then(restaurant => {

      if (restaurant === null) {

        return Promise.reject(new Error('no restaurant!'))
      }

      res.render('show', { restaurant })
    })
    .catch(next)
})



// edit one restaurant
router.get('/:id/edit', (req, res, next) => {
  const id = req.params.id
  Restaurant.findById(id)
    .lean()
    .then(restaurant => {
      if (restaurant === null) {
        throw new Error("restaurant not existed")
      }
      res.render('edit', { restaurant })
    })
    .catch(next)  // edit 也需要防止進到空白頁面 不可針對空白id做修改 不然無法進入下方的put
})

router.put("/:id", (req, res) => {
  const id = req.params.id

  Restaurant.findById(id)
    .then(restaurant => {


      Object.assign(restaurant, req.body)

      restaurant.save()
    }).then(() => res.redirect(`/restaurants/${id}`))
    .catch(next)
}
)

// delete a restaurant
router.delete('/:id', (req, res) => {
  const id = req.params.id
  Restaurant.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})


module.exports = router