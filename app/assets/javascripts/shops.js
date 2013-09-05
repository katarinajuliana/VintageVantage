$(function () {
  $(".shop").on("click", function (event) {
    event.preventDefault();
  
    var shopId = $(event.target).data("id");
    var method = ($(event.target).hasClass("fav") ? "POST" : "DELETE")
  
    $.ajax({
      url: "/shops/" + shopId + "/shop_favorite.json",
      type: method,
      data: { shop_id: shopId },
      success: function () {
        $(".shop").toggleClass("hidden");
      },
      error: function (response) {
        console.log(response);
        $('#auth-modal').modal('show');
      }
    });
  });
});