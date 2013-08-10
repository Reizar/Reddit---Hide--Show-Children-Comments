$(document).keydown(function(e) {
  if(e.which == 72 && e.altKey) {
    $(".child").hide()
    $(".parent").css("margin-top", "20px");
  } else if (e.which == 83 && e.altKey) {
    $(".child").show();
    $(".parent").css("margin-top", "0px");
  }
});
