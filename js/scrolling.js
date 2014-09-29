/*This javascript contains the code for scrolling
stuff and smooth scrolling jumps.

By: Ghanan Gowripalan*/

$(document).ready(function () {
  //On click of the button, scroll to the designated area
  //Only works for buttons that is a member of class "scrolling"
  //and has the 'href' attribute set to the "#<id>" of the jump-t0
  //section (example href="#ScrollToThis"
  $(".scrolling").click(function (e) {
    e.preventDefault();
    var lessTop = 0;//$('#g-navbar').height() * 2;

    //scroll only to edge of navbar when not in non-column mode
    /*if ($(window).width() > 768) {
      lessTop = $('#top-banner').height();
    }*/

    var scrollToSection = $(this).attr("href");

    $('html, body').animate({
      scrollTop: $(scrollToSection).offset().top - lessTop
    }, 1000);
  });
});
