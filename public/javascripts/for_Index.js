


// loading

const loader = document.querySelector('.loader-container')
const container = document.querySelector('.card-container')
const searchBtn = document.querySelector('#search-button')

searchBtn.addEventListener('click', loading)

function loading() {

  loader.hidden = false;
  // container.hidden = true; => not work ... 
  container.style.visibility = 'hidden';
  // container.innerHTML = ''; =>  work !
}




// Light Dark mode



// 搜尋無結果的時候


// 定期 git commit 記錄版本



// 嘗試引入 google Map的 API
