(function ($) {
  'use strict';

  jQuery(document).ready(function ($) {
    $('.welcome-slider').owlCarousel({
      items: 1,
      margin: 0,
      loop: false,
      dots: false,
      nav: true,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      autoplay: false,
      mouseWheel: false,
    });
  });

  jQuery(window).on('load', function () {});
})(jQuery);
