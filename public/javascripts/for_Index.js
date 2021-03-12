const loader = document.querySelector('.loader-container')
const container = document.querySelector('.card-container')
const searchBtn = document.querySelector('#search-button')
const toggleSwitch = document.querySelector('input[type="checkbox"]')

// loading
searchBtn.addEventListener('click', loading)

function loading() {

  loader.hidden = false;
  // container.hidden = true; => not work ... 
  container.style.visibility = 'hidden';
  // container.innerHTML = ''; =>  work !
}



// Light Dark mode

function switchMode(event) {
  const checked = event.target.checked
  if (checked) {
    document.documentElement.setAttribute('data-mode', 'Dark')
  } else {
    document.documentElement.setAttribute('data-mode', 'Light')
  }

}


toggleSwitch.addEventListener('change', switchMode)





