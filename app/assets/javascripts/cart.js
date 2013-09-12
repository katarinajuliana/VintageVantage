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
      }
    });
  });
});