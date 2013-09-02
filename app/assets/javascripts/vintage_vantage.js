window.VV = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var items = JSON.parse($("#bootstrapped-items").html());
    var itemsCollection = new VV.Collections.Items(items);
    
    new VV.Routers.Items($("#content"), itemsCollection);
    Backbone.history.start();
  }
};

$(document).ready(function(){
  VV.initialize();
});
