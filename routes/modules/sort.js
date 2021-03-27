// const express = require('express')
// const router = express.Router()
// const restaurant = require('../../models/restaurant')


// router.get('/', (req, res) => {




//   const { keyword, searchType, sortType
//   } = req.query

//   console.log(req.query)

//   let sortOrient, sortOption

//   switch (option) {
//     case "sort-h2l":
//       sortOrient = 'ratingOrient'
//       sortOption = 'desc'
//       break
//     case "sort-l2h":

//       sortOrient = 'ratingOrient'
//       sortOption = 'asc'
//       break
//     case "sort-a2z":

//       sortOrient = 'nameOrient'
//       sortOption = 'name'
//       break
//     case "sort-z2a":

//       sortOrient = 'nameOrient'
//       sortOption = '-name'
//       break
//   }

//   if (sortOrient === 'ratingOrient') {

//     if (searchType === '餐廳名字') {
//       Restaurant.find({
//         name: { $regex: `${keyword}`, $options: 'i' },
//       })
//         .sort({ rating: `${sortOption}` })
//         .lean()
//         .then(restaurants => {
//           if (restaurants.length === 0) {
//             setTimeout(() => { res.render('noResult', { keyword, searchType }) }, 1000)

//           } else {
//             setTimeout(() => { res.render('index', { restaurants, keyword, searchType }) }, 1000)
//           }
//         })
//         .catch(error => console.log(error))
//     } else if (searchType === '餐廳種類') {
//       Restaurant.find({
//         category: { $regex: `${keyword}`, $options: 'i' },
//       })
//         .sort({ rating: `${sortOption}` })
//         .lean()
//         .then(restaurants => {
//           if (restaurants.length === 0) {
//             setTimeout(() => { res.render('noResult', { keyword, searchType }) }, 1000)

//           } else {
//             setTimeout(() => { res.render('index', { restaurants, keyword, searchType }) }, 1000)
//           }
//         })
//         .catch(error => console.log(error))
//     } else if (searchType === '評價') {

//       if (isNaN(Number(keyword))) {
//         setTimeout(() => { res.render('noResult', { keyword, searchType }) }, 1000)
//         return
//       }

//       Restaurant.find({
//         rating: { $gte: Number(keyword) }
//       })
//         .sort({ rating: `${sortOption}` })
//         .lean()
//         .then(restaurants => {
//           if (restaurants.length === 0) {
//             setTimeout(() => { res.render('noResult', { keyword, searchType }) }, 1000)

//           } else {
//             setTimeout(() => { res.render('index', { restaurants, keyword, searchType }) }, 1000)
//           }
//         })
//         .catch(error => console.log(error))

//     } else if (searchType === '區域') {
//       Restaurant.find({
//         location: { $regex: `${keyword}`, $options: 'i' }
//       })
//         .sort({ rating: `${sortOption}` })
//         .lean()
//         .then(restaurants => {
//           if (restaurants.length === 0) {
//             setTimeout(() => { res.render('noResult', { keyword, searchType }) }, 1000)

//           } else {
//             setTimeout(() => { res.render('index', { restaurants, keyword, searchType }) }, 1000)
//           }
//         })
//         .catch(error => console.log(error))
//     }




//   } else if (sortOrient === 'nameOrient') {

//     if (searchType === '餐廳名字') {
//       Restaurant.find({
//         name: { $regex: `${keyword}`, $options: 'i' },
//       })
//         .sort(`${sortOption}`)
//         .lean()
//         .then(restaurants => {
//           if (restaurants.length === 0) {
//             setTimeout(() => { res.render('noResult', { keyword, searchType }) }, 1000)

//           } else {
//             setTimeout(() => { res.render('index', { restaurants, keyword, searchType }) }, 1000)
//           }
//         })
//         .catch(error => console.log(error))
//     } else if (searchType === '餐廳種類') {
//       Restaurant.find({
//         category: { $regex: `${keyword}`, $options: 'i' },
//       })
//         .sort(`${sortOption}`)
//         .lean()
//         .then(restaurants => {
//           if (restaurants.length === 0) {
//             setTimeout(() => { res.render('noResult', { keyword, searchType }) }, 1000)

//           } else {
//             setTimeout(() => { res.render('index', { restaurants, keyword, searchType }) }, 1000)
//           }
//         })
//         .catch(error => console.log(error))
//     } else if (searchType === '評價') {

//       if (isNaN(Number(keyword))) {
//         setTimeout(() => { res.render('noResult', { keyword, searchType }) }, 1000)
//         return
//       }

//       Restaurant.find({
//         rating: { $gte: Number(keyword) }
//       })
//         .sort(`${sortOption}`)
//         .lean()
//         .then(restaurants => {
//           if (restaurants.length === 0) {
//             setTimeout(() => { res.render('noResult', { keyword, searchType }) }, 1000)

//           } else {
//             setTimeout(() => { res.render('index', { restaurants, keyword, searchType }) }, 1000)
//           }
//         })
//         .catch(error => console.log(error))

//     } else if (searchType === '區域') {
//       Restaurant.find({
//         location: { $regex: `${keyword}`, $options: 'i' }
//       })
//         .sort(`${sortOption}`)
//         .lean()
//         .then(restaurants => {
//           if (restaurants.length === 0) {
//             setTimeout(() => { res.render('noResult', { keyword, searchType }) }, 1000)

//           } else {
//             setTimeout(() => { res.render('index', { restaurants, keyword, searchType }) }, 1000)
//           }
//         })
//         .catch(error => console.log(error))
//     }


//   }








// })


// module.exports = router