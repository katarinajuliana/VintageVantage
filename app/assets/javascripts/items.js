// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function () {
  $(".item").on("click", function (event) {
    event.preventDefault();
    
    var itemId = $(event.target).data("id");
    var method = ($(event.target).hasClass("fav") ? "POST" : "DELETE")
    
    $.ajax({
      url: "/items/" + itemId + "/item_favorite.json",
      type: method,
      data: { item_id: itemId },
      success: function (response) {
        $(".item").toggleClass("hidden");
      },
      error: function (response) {
        $('#auth-modal').modal('show');
      }
    });
  });
});