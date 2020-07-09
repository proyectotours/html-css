$('.arriba').click(function() {
   $('body, html').animate({
      scrollTop: '0px'
   }, 500);
});

$(window).scroll(function() {
   if ($(this).scrollTop() > 0) {
      $('.arriba').slideDown(500);
   } else {
      $('.arriba').slideUp(500);
   }
});