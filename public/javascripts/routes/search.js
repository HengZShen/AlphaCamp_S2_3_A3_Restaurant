
function keyForSearch(searchType, keyword) {
  name = searchType === '餐廳名字' ? String(keyword) : "."
  category = searchType === '餐廳種類' ? String(keyword) : "."
  location = searchType === '區域' ? String(keyword) : "."
  rating = searchType === '評價' ? Number(keyword) : '0'

  return { name, category, location, rating }

}

module.exports = keyForSearch