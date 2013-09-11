$(function () {
  $(".item-fav").on("click", function (event) {
    event.preventDefault();
    
    if (window.currentUser) {
      var $button = $(event.currentTarget);
      var itemId = $button.data("id");
      var method = ($button.hasClass("fav") ? "POST" : "DELETE")
   
      $.ajax({
        url: "/items/" + itemId + "/item_favorite.json",
        type: method,
        data: { item_id: itemId },
        success: function (response) {
          $button.toggleClass("hidden");
          $button.next().toggleClass("hidden");
          $button.prev().toggleClass("hidden");
        
          numFaves = parseInt($("#fav-count").html());
          if (method == "POST") {
            numFaves += 1
          } else {
            numFaves -= 1
          }
        
          $("#fav-count").html(numFaves);
        }
      });
    } else {
      $('#modal-errors').html("You must be logged in to do that!")
        .removeClass("hidden");
      $('#auth-modal').modal('show');
    }
  });
  
  $(".shop-fav").on("click", function (event) {
    event.preventDefault();
    
    if (window.currentUser) {
      var shopId = $(event.target).data("id");
      var method = ($(event.target).hasClass("fav") ? "POST" : "DELETE")
    
      $.ajax({
        url: "/shops/" + shopId + "/shop_favorite.json",
        type: method,
        data: { shop_id: shopId },
        success: function (response) {
          $(".shop-fav").toggleClass("hidden");
        }
      });    
    } else {
      $('#modal-errors').html("You must be logged in to do that!")
        .removeClass("hidden");
      $('#auth-modal').modal('show');
    }
  });
  
  $("#switch-fav").on("click", function (event) {
    event.preventDefault();
    
    $("#show-fav-items").toggleClass("active");
    $("#show-fav-shops").toggleClass("active");

    $("#favorites-show-items").toggleClass("hidden");
    $("#favorites-show-shops").toggleClass("hidden");
  });
});