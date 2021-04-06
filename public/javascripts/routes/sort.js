

function keyForSort(sortType) {
  let nameOrient = ''
  let ratingOrient = ''

  switch (sortType) {
    case "sort-h2l":
      ratingOrient = '-rating'
      break
    case "sort-l2h":
      ratingOrient = 'rating'
      break
    case "sort-a2z":
      nameOrient = 'name'
      break
    case "sort-z2a":
      nameOrient = '-name'
      break
  }

  return { nameOrient, ratingOrient }

}


module.exports = keyForSort

