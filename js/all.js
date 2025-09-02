$(document).ready(function(){
  $('.fa-solid').click(function(event){
    event.preventDefault();
    $('.fa-solid').toggleClass('active');
    $('.anchortag').slideToggle(300);
  });
  $('.pagemove-top').click(function(event){
    event.preventDefault();
    $('html,body').animate({
      scrollTop:0},
      0);
  });
  $('.pagemove-bottom').click(function(event){
    event.preventDefault();
    $('html,body').animate({
      scrollTop:1000},
      0);
  });
});
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed:2000,
  //自動撥放
  autoplay: {delay: 3000,},
  effect:'coverflow',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});
//燈箱效果
lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'fadeDuration':1000,
      'imageFadeDuration':600,
      'albumLabel':	"圖片 %1 of %2",
    });
