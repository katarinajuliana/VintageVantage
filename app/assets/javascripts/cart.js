$(function () {
  $(".add-cart").on("click", function(event) {
    event.preventDefault();

    var $button = $(event.currentTarget);
    var itemId = $button.data("id");
    
    $.ajax({
      url: "/cart_item.json",
      method: "post",
      data: { item_id: itemId },
      success: function (response) {
        $button.addClass("hidden");
        $button.next().removeClass("hidden");
      }
    });
  });
  
  $(".checkout").on("click", function (event) {
    event.preventDefault();
    
    var $button = $(event.target);
    var shopId = $button.data("id");
    
    $.ajax({
      url: "/cart.json",
      method: "put",
      data: { shop_id: shopId },
      success: function (response) {
        $button.removeClass("btn-success")
          .addClass("btn-danger")
          .html("They're yours!");
      }
    })
  });
  
  $(".in-cart").hover(function () {
      $(this).removeClass("btn-success")
        .addClass("btn-danger")
        .html("Go Checkout!");
    }, function () {
      $(this).removeClass("btn-danger")
        .addClass("btn-success")
        .html("Already in Cart");
    });
    
  $(".remove-cart").on("click", function (event) {
    event.preventDefault();
    
    var itemId = $(event.currentTarget).data("id");
    
    $.ajax({
      url: "/cart_item.json",
      method: "delete",
      data: { item_id: itemId },
      success: function (response) {
        $(".cart-item." + itemId).remove();
        
        var numItems = parseInt($("#cart-num-items").html()) - 1;
        $("#cart-num-items").html(numItems);
        $(".cart-count").html(numItems);
        
        var shopTotal = $(".cart-shop." + response.shop_id).find(".shop-total");
        var newTotal = parseInt($(shopTotal).html()) - parseInt(response.price);
        
        if (newTotal == 0) {
          $(".cart-shop." + response.shop_id).remove();
        } else {
          $(shopTotal).html(newTotal);
        }
      }
    });
  });
});