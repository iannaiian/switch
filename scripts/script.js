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

$(function() {
  var header = $(".navbar");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
      header.removeClass("navbar").addClass("navbar-dark");
    } else {
      header.removeClass("navbar-dark").addClass("navbar");
    }
  });
});

<<<<<<< HEAD
$('.parallax-window').parallax({
  imageSrc: 'images/bg1.jpg'
});
=======
$(".parallax-window").parallax({
  imageSrc: "../images/bg1.jpg"
});
>>>>>>> db332a05fece9b699961533f3e1002d2990e70d2
