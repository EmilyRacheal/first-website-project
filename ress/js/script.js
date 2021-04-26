$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $(".navbar").addClass("mycolor");
      $(".navbar").fadeIn();
    } else {
      $(".navbar").removeClass("mycolor");
      $(".navbar").fadeIn();
    }
});