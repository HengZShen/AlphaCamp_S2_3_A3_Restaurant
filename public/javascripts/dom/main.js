// Dark-Light mode
const toggleSwitch = document.querySelector('input[type="checkbox"]')
const previousMode = localStorage.getItem('background-mode') || []


// 根據上一次選擇 切換模式
if (previousMode !== []) {
  document.documentElement.setAttribute('data-mode', `${previousMode}`)
}


// 根據上一次選擇 切換按鈕
if (previousMode !== {}) {
  if (previousMode === 'Dark') {
    toggleSwitch.checked = true
  }
}




// Light Dark mode

function switchMode(event) {
  const checked = event.target.checked
  if (checked) {
    document.documentElement.setAttribute('data-mode', 'Dark')
    localStorage.setItem('background-mode', 'Dark')
  } else {
    document.documentElement.setAttribute('data-mode', 'Light')
    localStorage.setItem('background-mode', 'Light')
  }

}


toggleSwitch.addEventListener('change', switchMode)


