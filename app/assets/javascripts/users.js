// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function () {
  $(".switch-fav").on("click", function (event) {
    event.preventDefault();
    
    $("#show-items").toggleClass("active");
    $("#show-shops").toggleClass("active");

    $("#favorite-items").toggleClass("hidden");
    $("#favorite-shops").toggleClass("hidden");
  });
});  