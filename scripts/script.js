baguetteBox.run(".tz-gallery");

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 5000,
  dots: false,
  navText: [
    '<i class="fas fa-caret-left"></i>',
    '<i class="fas fa-caret-right"></i>'
  ],
  responsive: {
    0: {
      items: 1,
      nav: true,
      loop: true
    }
  }
});