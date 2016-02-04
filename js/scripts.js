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

$(document).ready(function() {

  $("button").click(function() {
    $("ul#you").prepend("<li>hi</li>");
    $("ul#web").prepend("<li>bye</li>");

    $("ul#you").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#web").children("li").first().click(function() {
      $(this).remove();
    });


  });

});
