var buttonCallHeader = document.querySelector('.header__call')
var buttonCallLeftMenu = document.querySelector('.call--active')

var callForm = document.querySelector('.callForm')

var callFormClose1 = document.querySelector('.callForm__close--out')
var callFormClose2 = document.querySelector('.callForm__close')
var inputTelFocused = callForm.querySelector('input')

buttonCallHeader.addEventListener('click', function () {
  callForm.classList.add('rightForm--open')
  inputTelFocused.focus()
})

buttonCallLeftMenu.addEventListener('click', function () {
  callForm.classList.add('rightForm--open')
  inputTelFocused.focus()
})

callFormClose1.addEventListener('click', function () {
  callForm.classList.remove('rightForm--open')
})

callFormClose2.addEventListener('click', function () {
  callForm.classList.remove('rightForm--open')
})
