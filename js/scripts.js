$(document).ready(function() {
  $(".clickable1").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
});

$(document).ready(function() {
  $(".clickable2").click(function() {
    $("#cat-in").fadeToggle();
    $("#cat-out").fadeToggle();
  });
});
