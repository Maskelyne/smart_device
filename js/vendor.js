$(document).ready(function() {
  $("a.main-header__advantages-scroll").click(function() {
      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
          duration: 1500,
          easing: "swing"
      });
      return false;
    });
});

$(document).ready(function() {
  $("a.button--consultation").click(function() {
      $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
          duration: 1500,
          easing: "swing"
      });
      return false;
    });
});

$(document).ready(function() {
  $("#user-form-phone").mask("+7 (999) 99-99-999");
  $("#user-phone").mask("+7 (999) 99-99-999");
});
