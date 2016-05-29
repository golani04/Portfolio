(function($) {
  // smooth scrolling + to the location
  $('a[href*="#"]:not([href="#"])').on('click', function(e){
		e.preventDefault()

  $('html, body').animate({
      scrollTop : $(this.hash).offset().top
    }, 1500);
  });

  // change opacity from 0 to 1
  $(window).on('scroll', function() {
    var navbar = $('.navbar'),
        scrollTop = $(this).scrollTop(),
        calc = scrollTop / 1000;

    navbar.css({
      'background-color': 'rgba(0, 0, 0, ' + calc + ')',
      'transition': 'background-color 0.05s ease'
    });

    if (calc > '0.9') {
      navbar.css({
        'background-color': 'rgba(0, 0, 0, 0.9)',
        'transition': 'background-color 0.05s ease'
      });
    } else if (calc < '0' || scrollTop === 0) {
      navbar.css({
        'background-color': 'rgba(0, 0, 0, 0)',
        'transition': 'background-color 0.15s ease'
      });
    }
  });
})(jQuery);
