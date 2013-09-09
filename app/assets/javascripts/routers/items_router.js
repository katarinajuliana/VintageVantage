VV.Routers.Items = Backbone.Router.extend({
  initialize: function($rootEl, itemsCollection) {
    this.$rootEl = $rootEl;
    this.items = itemsCollection;
  },
   
  routes: {
    "": "indexItems",
    "highest-price": "sortHighestPrice",
    "lowest-price": "sortLowestPrice",
    "most-recent": "sortMostRecent"
  },
  
  indexItems: function() {
    var itemsIndexView = new VV.Views.ItemsIndex({
      collection: this.items
    });
    
    this.$rootEl.html(itemsIndexView.render().$el);
  },
  
  sortHighestPrice: function () {
    this.items.comparator = function (item) {
      var price = item.get("price");
      return price * -1
    }
    
    this.items.sort();
    Backbone.history.navigate("#/");
  },
  
  sortLowestPrice: function () {
    this.items.comparator = function (item) {
      return item.get("price");
    }
    
    this.items.sort();
    Backbone.history.navigate("#/");
  },
  
  sortMostRecent: function () {
    this.items.comparator = function (item1, item2) {
      if (item1.get("updated_at") > item2.get("updated_at")) {
        return -1
      } else {
        return 1
      }
    }
    
    this.items.sort();
    Backbone.history.navigate("#/")
  }
});
