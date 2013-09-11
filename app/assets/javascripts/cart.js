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
        $button.addClass("disabled").addClass("in-cart").html("In Cart!");
      }
    });
  });
  
  $(".in-cart").on("mouseenter", function () {
    debugger
      $(this).hide();
      $(".checkout").show();
    });
    
  $(".remove-cart").on("click", funct)
});