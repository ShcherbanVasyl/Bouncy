$(document).ready(function() {
  $('.toggler-icon').on('click', function() {
    $('.nav-bar').slideToggle('0.5s');
  });

  $(".icon:nth-child(1)").addClass("icon-on");
  $(".content:nth-child(1)").addClass("show");

  $(".icon").click(function(){
    $(".icon").removeClass("icon-on");
    $(this).addClass("icon-on");
    var index = $(this).index()+1;
    $(".content").removeClass("show");
    $(".content:nth-child("+ index +")").addClass("show");
  });
});
