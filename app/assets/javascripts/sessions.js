$(function () {
  $("body").on($.modal.CLOSE, function (event, modal) {
    $("#modal-errors").empty().addClass("hidden");
    $(".modal-tabs").removeClass("acive");
    $(".modal-form").addClass("hidden");
  });
  
  $('#sign-in-tab').on('click', function (event) {
    event.preventDefault();
    
    $('#sign-in-form').removeClass('hidden');
    $('#sign-in-tab').addClass('active');
    
    $('#sign-up-form').addClass('hidden');
    $('#sign-up-tab').removeClass('active');
  });
  
  $('#sign-up-tab').on('click', function (event) {
    event.preventDefault();
    
    $('#sign-up-form').removeClass('hidden');
    $('#sign-up-tab').addClass('active');
    
    $('#sign-in-form').addClass('hidden');
    $('#sign-in-tab').removeClass('active');
  });
  
  $('#new-user-form').on('submit', function (event) {
    event.preventDefault();
    
    var formData = $(event.target).serializeJSON();
    
    $.ajax({
      url: '/users.json',
      type: 'post',
      data: formData,
      success: function (response) {
        $.modal.close();
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
        $.modal.close();
        $('#user-nav').removeClass('hidden');
        $('#anon-nav').addClass('hidden');
        $('.toolbar').removeClass('hidden');
        
        window.VV.populateUserNav(response, response.shop);
        window.currentUser = response;

        var shopButtons = $('.shop-fav')
        _.each(shopButtons, function(button) {
          var buttonShopId = $(button).data('id')
          var favShop = _.find(response.shops, function(shop) {
            return shop.id == buttonShopId;
          });

          if (favShop) {
            $(button).toggleClass('hidden');
          }
        });
        
        var itemButtons = $('.item-fav')
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
  
  $("#sign-out").on("click", function (event) {
    window.currentUser = null
  });
  
  $("#sign-in-link").on("click", function (event){
    event.preventDefault();
    
    $("#sign-in-tab").addClass("active");
    $("#sign-in-form").removeClass("hidden");
    
    $("#sign-up-tab").removeClass("active");
    $("#sign-up-form").addClass("hidden");
    
    $('#auth-modal').modal({fadeDuration: 250});
  });
  
  $("#sign-up-link").on("click", function (event){
    event.preventDefault();
    
    $("#sign-up-tab").addClass("active");
    $("#sign-up-form").removeClass("hidden");
    
    $("#sign-in-tab").removeClass("active");
    $("#sign-in-form").addClass("hidden");
    
    $('#auth-modal').modal({fadeDuration: 250});
  });
});