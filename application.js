$(".shaker-button button").click(function(){
  $(".shaker img").effect( "shake", {times:6, direction:'up'}, 1500 );
});

$(".ingredients img").hover(function(){
  $(".ingredients img").not(this).addClass("not-active");
}, function() {
  $(".ingredients img").removeClass("not-active");
});

$(".ingredients img").hover(function(){
  var elementId = $(this).attr('id')
  $(".ingredients #" + elementId + "-tooltip").addClass("visible");
}, function() {
  var elementId = $(this).attr('id')
  $(".ingredients #" + elementId + "-tooltip").removeClass("visible");
});

function myFunction() {
  var x = document.getElementById("mynavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
