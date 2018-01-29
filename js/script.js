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

  $(".image:nth-child(2)").addClass("image-on");
  $(".icon-text:nth-child(2)").addClass("icon-text-show");

  $(".image").click(function(){
    $(".image").removeClass("image-on");
    $(this).addClass("image-on");
    var index = $(this).index()+1;
    $(".icon-text").removeClass("icon-text-show");
    $(".icon-text:nth-child("+ index +")").addClass("icon-text-show");
  });
});
