var feedbackForm = document.querySelector('.feedbackForm__form')
var buttonChatHeader = document.querySelector('.header__chat')
var buttonChatLeftMenu = document.querySelector('.chat--active')

var feedbackForm = document.querySelector('.feedbackForm')

var feedbackFormClose1 = document.querySelector('.feedbackForm__close--out')
var feedbackFormClose2 = document.querySelector('.feedbackForm__close')

var inputNameFocused = feedbackForm.querySelector('input')

buttonChatHeader.addEventListener('click', function () {
  feedbackForm.classList.add('rightForm--open')
  inputNameFocused.focus()
})

buttonChatLeftMenu.addEventListener('click', function () {
  feedbackForm.classList.add('rightForm--open')
  inputNameFocused.focus()
})

feedbackFormClose1.addEventListener('click', function () {
  feedbackForm.classList.remove('rightForm--open')
})

feedbackFormClose2.addEventListener('click', function () {
  feedbackForm.classList.remove('rightForm--open')
})
