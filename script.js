$(function() {

  //ページ訪問時の動作
  var fadeSpeed1 = 3000;
   $('.header-left')
       .css({opacity: '0.0'})
       .animate({opacity: '1'}, fadeSpeed1);

  var fadeSpeed1 = 3000;
   $('.header-left-smaph')
       .css({opacity: '0.0'})
       .animate({opacity: '1'}, fadeSpeed1);


  var fadeSpeed2 = 7000;
   $('.fa-instagram')
       .css({opacity: '0.0'})
       .animate({opacity: '1'}, fadeSpeed2);

  var fadeSpeed3 = 7000;
   $('.fa-envelope')
       .css({opacity: '0.0'})
       .animate({opacity: '1'}, fadeSpeed3);

  var fadeSpeed4 = 8000;
   $('.content')
       .css({opacity: '0.0'})
       .animate({opacity: '1'}, fadeSpeed4);

  var fadeSpeed4 = 8000;
   $('.content-smaph')
       .css({opacity: '0.0'})
       .animate({opacity: '1'}, fadeSpeed4);

  var fadeSpeed5 = 8000;
   $('footer')
       .css({opacity: '0.0'})
       .animate({opacity: '0.7'}, fadeSpeed5);

  //modal
  $('.fa-envelope').click(function() {
    $('#contact-modal').fadeIn();
  });

  $('#close-modal').click(function() {
    $('#contact-modal').fadeOut();
  });
  
});
