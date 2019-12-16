// A $( document ).ready() block.
$( document ).ready(function() {

  $("#gallery, #button").click(function () {
    alert("Page under construction");
  });

  $("#downarrow").click(function(){
    $("#phone, #email").slideDown(1000);
  });

  setTimeout(function () {
    $('#title').addClass('text-warning');
    }, 2000);
});

