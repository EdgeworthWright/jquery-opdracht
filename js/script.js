$(document).ready(function() {
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
