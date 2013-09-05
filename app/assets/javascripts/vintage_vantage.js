window.VV = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl, itemsData) {
    var items = new VV.Collections.Items(itemsData);

    new VV.Routers.Items($rootEl, items);
    Backbone.history.start();
  },
  populateUserNav: function(user, shopId) {
    var userLink = "<li><p class='navbar-text pull-right'> Hi, <a href='/users/" + user.id + "'>" + user.username + "</a>.</p></li>";

    var favLink = "<li><a href='/users/" + user.id + "/favorites'> ❤ </a></li>";

    if(shopId) {
      var shopLink = "<li><a href='/shops/" + shopId + "'>Your Shop</a></li>"
    } else {
      var shopLink = "<li><a href='/shops/new'>Open Shop</a></li>"
    };

    $("#user-nav").prepend(userLink + favLink + shopLink)
  }
};

$(function () {
  window.currentUser = JSON.parse($("#current-user").html());
  
  
  if(currentUser) {
    window.currentShop = JSON.parse($("#current-shop").html());
    window.VV.populateUserNav(window.currentUser, window.currentShop.id);
  }
});