// form validation
const form = document.querySelector('form')
form.addEventListener('submit', function manualCheck(event) {
  if (!form.checkValidity()) {
    event.stopPropagation()
    event.preventDefault()
  }
})

const submitBtn = document.querySelector('#restaurant')
submitBtn.addEventListener('click', function firstCheck() {
  form.classList.add('was-validated')
})