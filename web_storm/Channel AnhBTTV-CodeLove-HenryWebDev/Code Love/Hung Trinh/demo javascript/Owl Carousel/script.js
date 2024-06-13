$('.slide-banner').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  center: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplaySpeed: 1500,
  dotsSpeed: 1500,
  mouseDrag: false,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 2
    }
  }
})

$('.slide-product').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})
