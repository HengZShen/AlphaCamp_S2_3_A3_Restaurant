const sortBtn = document.querySelector('.sort-toggle')
const sortItems = document.querySelectorAll('.sort-item')
const sortMenu = document.querySelector('.sort-menu')
const sortType = document.querySelector('#sortType')


// change dropdown Btn name when click dropdown item


function removeMarkforSort() {
  sortItems.forEach(sortItem => sortItem.classList.remove('was-clicked'))
}


function markTargetforSort(target) {
  target.classList.add(
    'was-clicked'
  )
}


//change search bar Placeholder
function changeSortType(target) {
  const option = target.id

  switch (option) {
    case "sort-h2l":
      sortType.value = "sort-h2l"
      sortBtn.innerText = '評價 高-低'
      break
    case "sort-l2h":
      sortType.value = "sort-l2h"
      sortBtn.innerText = '評價 低-高'
      break
    case "sort-a2z":
      sortType.value = "sort-a2z"
      sortBtn.innerText = '名字 A-Z'
      break
    case "sort-z2a":
      sortType.value = "sort-z2a"
      sortBtn.innerText = '名字 Z-A'
      break
  }

}




// change sort Btn name when click sort item
function changeBtnNameforSort(event) {
  const target = event.target
  //  ensure click target is <a> not <span> & <i>
  if (!target.classList.contains('sort-item')) return

  // remove css class  'was-clicked' from all <a> elements
  removeMarkforSort()


  const text = target.innerText
  sortBtn.innerText = text


  // add css class 'was-clicked' on target
  markTargetforSort(target)

  // change sortType value
  changeSortType(target)

}








// add eventListener on each <a> link
sortItems.forEach(sortItem => sortItem.addEventListener('click', changeBtnNameforSort)
)




// check default sort options when refresh 


function markDefaultOptionforSort(option) {

  const sortOpts = document.querySelectorAll('.sort-item')
  sortOpts.forEach(sortOpt => {
    if (sortOpt.id === option) {

      sortOpt.classList.add('was-clicked')
    }
  })

}


function changeDefaultBtnText(option) {


  switch (option) {
    case "sort-h2l":
      sortBtn.innerText = '評價 高-低'
      break
    case "sort-l2h":
      sortBtn.innerText = '評價 低-高'
      break
    case "sort-a2z":
      sortBtn.innerText = '名字 A-Z'
      break
    case "sort-z2a":
      sortBtn.innerText = '名字 Z-A'
      break
  }

}

function checkSortType() {
  const option = sortType.value

  markDefaultOptionforSort(option)

  changeDefaultBtnText(option)

}




checkSortType()