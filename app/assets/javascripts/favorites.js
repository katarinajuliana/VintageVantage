$(function () {
  $(".switch-fav").on("click", function (event) {
    event.preventDefault();
    
    $("#show-items").toggleClass("active");
    $("#show-shops").toggleClass("active");

    $("#favorite-items").toggleClass("hidden");
    $("#favorite-shops").toggleClass("hidden");
  });
  
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