// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function () {
  $("#session-form").on('submit', function (event) {
    event.preventDefault();

    var formData = $(event.target).serializeJSON();

    $.ajax({
      url: "/session.json",
      type: "post",
      data: formData,
      success: function (response) {
        $("#auth-modal").modal("hide");
        $("#user-nav").removeClass("hidden");
        $("#anon-nav").addClass("hidden");
        window.VV.populateUserNav(response, response.shop.id);
        

        var shopButtons = $(".shop")
        _.each(shopButtons, function(button) {
          var buttonShopId = $(button).data("id")
          var favShop = _.find(response.shops, function(shop) {
            return shop.id == buttonShopId;
          });

          if (favShop) {
            $(button).toggleClass('hidden');
          }
        });
        
        var itemButtons = $(".item")
        _.each(itemButtons, function(button) {
          var buttonItemId = $(button).data("id")
          var favItem = _.find(response.items, function(item) {
            return item.id == buttonItemId;
          });

          if (favItem) {
            $(button).toggleClass('hidden');
          }
        });
        
      },
      error: function (response) {
        console.log(response)
      }
    });
  });
});