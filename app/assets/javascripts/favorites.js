$(function () {
  $("#switch-fav").on("click", function (event) {
    event.preventDefault();
    
    $("#show-fav-items").toggleClass("active");
    $("#show-fav-shops").toggleClass("active");

    $("#favorites-show-items").toggleClass("hidden");
    $("#favorites-show-shops").toggleClass("hidden");
  });
  
  $(".shop-fav").on("click", function (event) {
    event.preventDefault();
  
    var shopId = $(event.target).data("id");
    var method = ($(event.target).hasClass("fav") ? "POST" : "DELETE")
  
    $.ajax({
      url: "/shops/" + shopId + "/shop_favorite.json",
      type: method,
      data: { shop_id: shopId },
      success: function () {
        $(".shop-fav").toggleClass("hidden");
      },
      error: function () {
        $('#auth-modal').modal('show');
      }
    });
  });
  
  $(".item-fav").on("click", function (event) {
    event.preventDefault();
    
    var itemId = $(event.target).data("id");
    var method = ($(event.target).hasClass("fav") ? "POST" : "DELETE")
    
    $.ajax({
      url: "/items/" + itemId + "/item_favorite.json",
      type: method,
      data: { item_id: itemId },
      success: function () {
        $(".item-fav").toggleClass("hidden");
        
        numFaves = parseInt($("#fav-count").html());
        if (method == "POST") {
          numFaves += 1
        } else {
          numFaves -= 1
        }
        
        $("#fav-count").html(numFaves);
      },
      error: function () {
        $('#auth-modal').modal('show');
      }
    });
  });
});