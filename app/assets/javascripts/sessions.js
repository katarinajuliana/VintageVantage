$(function () {
  $("#auth-modal").on("hide.bs.modal", function () {
    $("#modal-errors").empty().addClass("hidden");
  });
  
  $('.modal-tab').on('click', function () {
    $('.modal-form').toggleClass('hidden');
    $('.modal-tab').toggleClass('active');
  });
  
  $('#new-user-form').on('submit', function (event) {
    event.preventDefault();
    
    var formData = $(event.target).serializeJSON();
    
    $.ajax({
      url: '/users.json',
      type: 'post',
      data: formData,
      success: function (response) {
        $('#auth-modal').modal('hide');
        $('#user-nav').removeClass('hidden');
        $('#anon-nav').addClass('hidden');
        
        window.VV.populateUserNav(response);
      },
      error: function (response) {
        $('#modal-errors').html(response.responseText).removeClass("hidden");
      }
    })
  });
  
  $('#session-form').on('submit', function (event) {
    event.preventDefault();

    var formData = $(event.target).serializeJSON();

    $.ajax({
      url: '/session.json',
      type: 'post',
      data: formData,
      success: function (response) {
        $('#auth-modal').modal('hide');
        $('#user-nav').removeClass('hidden');
        $('#anon-nav').addClass('hidden');
        $('.toolbar').removeClass('hidden');
        window.VV.populateUserNav(response, response.shop);
        

        var shopButtons = $('.shop')
        _.each(shopButtons, function(button) {
          var buttonShopId = $(button).data('id')
          var favShop = _.find(response.shops, function(shop) {
            return shop.id == buttonShopId;
          });

          if (favShop) {
            $(button).toggleClass('hidden');
          }
        });
        
        var itemButtons = $('.item')
        _.each(itemButtons, function(button) {
          var buttonItemId = $(button).data('id')
          var favItem = _.find(response.items, function(item) {
            return item.id == buttonItemId;
          });

          if (favItem) {
            $(button).toggleClass('hidden');
          }
        }); 
      },
      error: function (response) {
        $('#modal-errors').html(response.responseText).removeClass("hidden");
      }
    });
  });
});