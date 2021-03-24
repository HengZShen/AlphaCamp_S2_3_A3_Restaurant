const loader = document.querySelector('.loader-container')
const container = document.querySelector('.card-container')
const searchBtn = document.querySelector('#search-button')
const searchInput = document.querySelector('input[type="text"]')
const searchType = document.querySelector('#searchType')
const dropdownBtn = document.querySelector('.dropdown-toggle')
const dropdownItems = document.querySelectorAll('.dropdown-item')
const dropdownMenu = document.querySelector('.dropdown-menu')

// loading
searchBtn.addEventListener('click', loading)

function loading() {
  if (searchInput.value.trim().length === 0) return
  loader.hidden = false;
  // container.hidden = true; => not work ... 
  container.style.visibility = 'hidden';
  // container.innerHTML = ''; =>  work !
}



// form validation
const form = document.querySelector('form')
form.addEventListener('submit', function manualCheck(event) {
  if (!form.checkValidity()) {
    event.stopPropagation()
    event.preventDefault()
  }
})

searchBtn.addEventListener('click', function firstCheck(event) {
  form.classList.add('was-validated')
})



// change dropdown Btn name when click dropdown item


function removeMark() {
  dropdownItems.forEach(dropdownItem => dropdownItem.classList.remove('was-clicked'))
}


function markTarget(target) {
  target.classList.add(
    'was-clicked'
  )
}


// change dropdown Btn name when click dropdown item
function changeBtnName(event) {
  const target = event.target
  const text = target.innerText
  dropdownBtn.innerText = text

  // remove css class  'was-clicked' from all <a> elements
  removeMark()

  // add css class 'was-clicked' on target
  markTarget(target)
}



// add eventListener on each <a> link
dropdownItems.forEach(dropdownItem => dropdownItem.addEventListener('click', changeBtnName)
)


//change search bar Placeholder
function changeSearchPlaceHolder(event) {
  const target = event.target
  const option = target.innerText
  console.log(option)
  switch (option) {
    case "餐廳名字    ":
      searchInput.placeholder = '請輸入餐廳名字'
      searchType.value = 'name'
      break
    case "餐廳種類    ":
      searchInput.placeholder = '請輸入餐廳種類 ex: 咖啡、日本....'
      searchType.value = 'category'
      break
    case "評價    ":
      searchInput.placeholder = "依造評價搜尋 ex: 5 => 搜尋評價5以上的餐廳 !!"
      searchType.value = 'rating'
      break
    case "區域    ":
      searchInput.placeholder = "請輸入地址 ex: 台北市、信義路..... "
      searchType.value = 'location'
      break
  }

}





// add eventListener on each <a> link
dropdownItems.forEach(dropdownItem => dropdownItem.addEventListener('click', changeSearchPlaceHolder)
)