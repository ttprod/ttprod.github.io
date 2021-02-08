// $(document).ready(function(){
//   $('.sub-btn').on('click', function(){
//     $(this).next('.sub-menu').slideToggle();
//     $(this).find('.dropdown').toggleClass('rotate');
//   });

//   $('.menu-btn').on('click', function(){
//     $('.side-bar').addClass('active');
//     $('.menu-btn').css('visibility', 'hidden');
//   });

//   $('.close-btn').on('click', function(){
//     $('.side-bar').removeClass('active');
//     $('.menu-btn').css('visibility', 'visible');
//     $('.sub-menu').slideUp();
//   });
  
// });
$(function(){
  let openBtn = $('.menu-btn'); let closeBtn = $('.close-btn');
  let subBtn = $('.sub-btn'); let sideBar = $('.side-bar');
  let subMenu = $('.sub-menu');

  openBtn.on('click', function() {
    sideBar.addClass('active');
    openBtn.css('visibility', 'hidden');
  });
  closeBtn.on('click', function() {
    sideBar.removeClass('active');
    openBtn.css('visibility', 'visible');
    subMenu.slideUp();
  });
  subBtn.on('click', function() {
    $(this).next('.sub-menu').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate');
  });
});