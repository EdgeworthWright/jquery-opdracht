$(document).ready(function() {

  

  $("h1").click(function() {
    $(this).animate({
      top: "-20px"
    }, 500).animate({
      top: "60px"}, 500).animate({
        top: "0"}, 500).animate({
          top: "40px"}, 500).animate({
            top: "0"}, 1400);
  });

  // Section hide/show image and text
  $('section img').mouseenter(function() {
    $(this).fadeTo(700, 0);
  }).mouseleave(function() {
    $(this).fadeTo(300, 1);
  }).click(function() {
    $(this).next().toggle(500);
  });

  // Footer go up/down
  $('footer').click(function() {
    $(this).animate({
      bottom: '+=10px',
      opacity: '-=.02'
    }, 200);
  }).dblclick(function() {
    $(this).animate({
      bottom: '0',
      opacity: '1'
    }, 200);
  });

});
