$("p.styled").click(function() {
  var userRating = $(this).html();
  toggleClick(userRating);
  $("p.rated").text("You selected " + userRating + " out of 5.")
});


function toggleClick(name) {
  var clicked = $("p#" + name);
  clicked.toggleClass("clicked");
}


$("button").click(function() {
  $(".face").addClass("hidden");
  $(".back").removeClass("hidden");
});
