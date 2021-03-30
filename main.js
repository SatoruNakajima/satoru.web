$(function(){
  var duration = 500;

  var $nav_menu = $('.header_list');
  $('.header_nav_btn') .on('click', function(){
    $(this) .toggleClass('open');
    if($(this) .hasClass('open')){
      $(this) .text('Close');
      $nav_menu .stop(true) .animate({
        right: 0
      }, duration, 'swing');
    }else{
      $(this) .text('Menu');
      $nav_menu .stop(true) .animate({
        right: '-85vw'
      }, duration, 'swing');
    };
  });
});

$('#page_top') .click(function(){
  $('body, html') .animate({
    scrollTop: 0
  }, 700);
  return folse;
});
