VV.Routers.Items = Backbone.Router.extend({
  initialize: function($rootEl, itemsCollection) {
    this.$rootEl = $rootEl;
    this.items = itemsCollection;
  },
   
  routes: {
    "": "indexItems",
    "lowest-price": "sortLowestPrice",
    "highest-price": "sortHighestPrice"
  },
  
  indexItems: function() {
    var itemsIndexView = new VV.Views.ItemsIndex({
      collection: this.items
    });
    
    this.$rootEl.html(itemsIndexView.render().$el);
  },
  
  sortHighestPrice: function () {
    this.items.comparator = function (item) {
      return (item.get("price") );
    }
    
    this.items.sort();
  },
  
  sortLowestPrice: function () {
    this.items.comparator = function (item) {
      return item.get("price");
    }
    
    this.items.sort();
  }
});
