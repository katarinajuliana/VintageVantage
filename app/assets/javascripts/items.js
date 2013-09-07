$(function () {
  $(".display-option").on("click", function (event) {
    event.preventDefault();
    
    $(".thumbnail").removeClass("active");
    $(event.target).parent().addClass("active");

    var ord = $(event.target).parent().data("id");
    $(".display-photo").addClass("hidden");
    $("img[data-ord='" + ord + "']").removeClass("hidden");
  })
});