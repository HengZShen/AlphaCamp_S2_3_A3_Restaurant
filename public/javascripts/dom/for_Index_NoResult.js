const loader = document.querySelector('.loader-container')
const container = document.querySelector('.card-container')
const searchBtn = document.querySelector('#search-button')
const searchInput = document.querySelector('#search-input')
const searchType = document.querySelector('#searchType')
const dropdownBtn = document.querySelector('.search-toggle')
const dropdownItems = document.querySelectorAll('.search-item')
const dropdownMenu = document.querySelector('.search-menu')

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
  //  ensure click target is <a> not <span> & <i>
  if (!target.classList.contains('dropdown-item')) return

  // remove css class  'was-clicked' from all <a> elements
  removeMark()


  const text = target.innerText
  dropdownBtn.innerText = text


  // add css class 'was-clicked' on target
  markTarget(target)

}



// add eventListener on each <a> link
dropdownItems.forEach(dropdownItem => dropdownItem.addEventListener('click', changeBtnName)
)


//change search bar Placeholder
function changeSearchPlaceHolder(event) {
  const target = event.target
  const option = target.id

  switch (option) {
    case "search-name":
      searchInput.placeholder = '?????????????????????'
      searchType.value = '????????????'
      break
    case "search-category":
      searchInput.placeholder = '????????????????????? ex: ???????????????....'
      searchType.value = '????????????'
      break
    case "search-rating":
      searchInput.placeholder = "?????????????????? ex: 5 => ????????????5??????????????? !!"
      searchType.value = '??????'
      break
    case "search-location":
      searchInput.placeholder = "??????????????? ex: ?????????????????????..... "
      searchType.value = '??????'
      break
  }

}



// add eventListener on each <a> link
dropdownItems.forEach(dropdownItem => dropdownItem.addEventListener('click', changeSearchPlaceHolder)
)



// check default search options when refresh 


function markDefaultOption(option) {

  const optionBtns = document.querySelectorAll('.search-item')
  optionBtns.forEach(optionBtn => {
    if (optionBtn.innerText.includes(option)) {
      optionBtn.classList.add('was-clicked')
    }
  })
}

function changeDefaultPlaceholder(option) {

  switch (option) {
    case "????????????":
      searchInput.placeholder = '?????????????????????'
      break
    case "????????????":
      searchInput.placeholder = '????????????????????? ex: ???????????????....'
      break
    case "??????":
      searchInput.placeholder = "?????????????????? ex: 5 => ????????????5??????????????? !!"
      break
    case "??????":
      searchInput.placeholder = "??????????????? ex: ?????????????????????..... "
      break
  }
}


function checkSearchType() {
  const option = searchType.value

  markDefaultOption(option)

  // placeholder????????????
  changeDefaultPlaceholder(option)
}




checkSearchType()