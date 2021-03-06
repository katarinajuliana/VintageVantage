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
        
        var num = parseInt($(".cart-count").html()) + 1;
        $(".cart-count").html(num);
      }
    });
  });
  
  $(".checkout").on("click", function (event) {
    event.preventDefault();
    
    if (window.currentUser) {
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
    } else {
      $('#modal-errors').html("You must be logged in to do that!")
        .removeClass("hidden");
        
      $.modal.close;
  
      $("#sign-in-tab").addClass("active");
      $("#sign-in-form").removeClass("hidden");
  
      $("#sign-up-tab").removeClass("active");
      $("#sign-up-form").addClass("hidden");
  
      $("#auth-modal").modal({fadeDuration: 250}); 
    }
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