$(document).ready(function () {
  $('.toggle-menu').click(function () {
    $('.mob-gnb').toggleClass('active')
  });
  $('.toggle-menu').click(function () {
    $(this).toggleClass('active');
  });
  $('.gnb .dep1 > a').click(function () {
    var targetPos = $($(this).attr('href')).offset().top -80;
    $('body, html').animate({'scrollTop': targetPos});
  });
});