var headerBurger = document.querySelector('.header__burger')
var leftMenu = document.querySelector('.leftMenu')
var leftMenuClose = document.querySelector('.leftMenu__close')

headerBurger.addEventListener('click', function () {
  leftMenu.classList.add('leftMenu--open')
})

leftMenuClose.addEventListener('click', function () {
  leftMenu.classList.remove('leftMenu--open')
})
