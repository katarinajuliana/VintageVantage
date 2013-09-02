VV.Routers.Items = Backbone.Router.extend({
  initialize: function($rootEl, itemsCollection) {
    this.$rootEl = $rootEl;
    this.items = itemsCollection;
  },
   
  routes: {
    "": "indexItems"
  },
  
  indexItems: function() {
    var itemsIndexView = new VV.Views.ItemsIndex({
      collection: this.items
    });
    
    this.$rootEl.html(itemsIndexView.render().$el);
  }
});
