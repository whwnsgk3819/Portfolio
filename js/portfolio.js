$(window).scroll(function () {
     var scrollTop = $(this).scrollTop();
     var windowHeight = $(this).height();
     var scrollBottom = scrollTop + windowHeight;

     if (scrollTop >= 700) {
          $('.right__arrow').addClass("on");
     } else {
          $('.right__arrow').removeClass("on");
     }

     if (scrollBottom >= $('.about').offset().top) {
          $('.about').addClass("on");
     } else {
          $('.about').removeClass("on");
     }
     if (scrollBottom >= $('.introduce').offset().top) {
          $('.introduce').addClass("on");
     } else {
          $('.introduce').removeClass("on");
     }
     if (scrollBottom >= $('.portfolio').offset().top) {
          $('.portfolio').addClass("on");
     } else {
          $('.portfolio').removeClass("on");
     }
     if (scrollBottom >= $('.pf__one').offset().top) {
          $('.pf__one').addClass("on");
     } else {
          $('.pf__one').removeClass("on");
     }
     if (scrollBottom >= $('.pf__two').offset().top) {
          $('.pf__two').addClass("on");
     } else {
          $('.pf__two').removeClass("on");
     }
     if (scrollBottom >= $('.pf__three').offset().top) {
          $('.pf__three').addClass("on");
     } else {
          $('.pf__three').removeClass("on");
     }
     if (scrollBottom >= $('.pf__four').offset().top) {
          $('.pf__four').addClass("on");
     } else {
          $('.pf__four').removeClass("on");
     }
     if (scrollBottom >= $('.pf__five').offset().top) {
          $('.pf__five').addClass("on");
     } else {
          $('.pf__five').removeClass("on");
     }

     if (scrollBottom >= $('.pf__six').offset().top) {
          $('.pf__six').addClass("on");
     } else {
          $('.pf__six').removeClass("on");
     }
     if (scrollBottom >= $('.pf__seven').offset().top) {
          $('.pf__seven').addClass("on");
     } else {
          $('.pf__seven').removeClass("on");
     }



})



var $left = $(".header__menu-list-button")
var $button = $(".button")


$left.click(function () {
     $button.toggleClass("on");
})

$(document).ready(function () {
     //3초 후 로딩 제거
     setTimeout(function () {
          $('.loading').addClass('on');
     }, 2000)
     $(".right__arrow").click(function () {
          $('html, body').animate({
               scrollTop: 0
          }, 500);
          return false;
     });

     $("#listHome,#buttonHome").click(function () {
          $('html, body').animate({
               scrollTop: 0
          }, 500);
          return false;
     });
     $("#listAbout,#buttonAbout").click(function () {
          $('html, body').animate({
               scrollTop: $('.about').offset().top - 50
          }, 500);
          return false;
     });
     $("#listSkill,#buttonSkill").click(function () {
          $('html, body').animate({
               scrollTop: $('.introduce').offset().top - 180
          }, 500);
          return false;
     });
     $("#listPortfolio,#buttonPF").click(function () {

          $('html, body').animate({
               scrollTop: $('.portfolio').offset().top - 80
          }, 500);
          return false;

     });
})