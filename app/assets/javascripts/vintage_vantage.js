window.VV = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl, itemsData) {
    var items = new VV.Collections.Items(itemsData);

    new VV.Routers.Items($rootEl, items);
    Backbone.history.start();
  }
};
