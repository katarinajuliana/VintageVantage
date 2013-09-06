$(function () {
  $(".thumbnail").on("click", function (event) {
    event.preventDefault();
    
    $(".thumbnail").removeClass("active");
    $(event.target).parent().addClass("active");
    
    var clickedImage = $(event.target).attr("src");
    $("#display-photo").attr("src", clickedImage);
  })
});