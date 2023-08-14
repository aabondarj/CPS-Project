if (document.documentElement.clientWidth >= 768) {
  var openCloseButton = document.querySelectorAll('.main__button--change')
  var openCloseSwiper = document.querySelectorAll('.swiper--hidden')
  var checkClose = true

  var readMore = function (item, good) {
    item.addEventListener('click', function () {
      if (checkClose) {
        checkClose = false
        good.classList.add('swiper--open')
        item.textContent = 'Скрыть'
        item.classList.remove('main__button--change')
        item.classList.add('active')
      } else if (!checkClose) {
        checkClose = true
        good.classList.remove('swiper--open')
        item.textContent = 'Показать все'
        item.classList.remove('active')
        item.classList.add('main__button--change')
      }
    })
  }

  for (var i = 0; i < openCloseButton.length; i++) {
    readMore(openCloseButton[i], openCloseSwiper[i])
  }
}
