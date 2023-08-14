if (document.documentElement.clientWidth < 768) {
  new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    slidesPerView: 'auto',
    spaceBetween: 16
  })
}
