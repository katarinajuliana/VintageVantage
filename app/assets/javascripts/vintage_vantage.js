window.VV = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl) {
    var eraData = JSON.parse($("#bootstrapped-eras").html());
    new VV.Collections.Eras(eraData);
    
    var catData = JSON.parse($("#bootstrapped-categories").html());
    new VV.Collections.Categories(catData);
    
    var items = new VV.Collections.Items();
    
    items.fetch({
      success: function () {
        new VV.Routers.Items($rootEl, items);
        Backbone.history.start();
      },
      error: function (response) {
        console.log(response)
      }
    });
  },
  populateUserNav: function(user, shop) {
    var userLink = "<li><p class='navbar-text pull-right'> Hi, <a href='/users/" + 
      user.id + "'>" + user.username + "</a>.</p></li>";
    var favLink = "<li><a id='user-fav-btn' href='/users/" + user.username +
      "/favorites'>❤</a></li>";

    if(shop) {
      var shopLink = "<li><a href='/shops/" + shop.id + "'>Your Shop</a></li>"
    } else {
      var shopLink = "<li><a href='/shops/new'>Open Shop</a></li>"
    };

    $("#user-nav").prepend(userLink + favLink + shopLink)
  }
};


$(function () {
  console.log("Vintage Vantage, an online vintage marketplace by Katarina Blagojevic 2013");
  
  window.currentUser = JSON.parse($("#current-user").html());
  
  if(currentUser) {
    window.currentShop = JSON.parse($("#current-shop").html());
    window.VV.populateUserNav(window.currentUser, window.currentShop);
  }
});