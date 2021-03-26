const sortBtn = document.querySelector('.sort-toggle')
const sortItems = document.querySelectorAll('.sort-item')
const sortMenu = document.querySelector('.sort-menu')



// change dropdown Btn name when click dropdown item


function removeMark() {
  sortItems.forEach(sortItem => sortItem.classList.remove('was-clicked'))
}


function markTarget(target) {
  target.classList.add(
    'was-clicked'
  )
}


// change sort Btn name when click sort item
function changeBtnName(event) {
  const target = event.target
  //  ensure click target is <a> not <span> & <i>
  if (!target.classList.contains('sort-item')) return

  // remove css class  'was-clicked' from all <a> elements
  removeMark()


  const text = target.innerText
  sortBtn.innerText = text


  // add css class 'was-clicked' on target
  markTarget(target)

}



// add eventListener on each <a> link
sortItems.forEach(sortItem => sortItem.addEventListener('click', changeBtnName)
)
