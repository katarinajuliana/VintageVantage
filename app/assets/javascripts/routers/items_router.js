VV.Routers.Items = Backbone.Router.extend({
  initialize: function($rootEl, itemsCollection) {
    this.$rootEl = $rootEl;
    this.items = itemsCollection;
  },
   
  routes: {
    "": "indexItems",
    "category/:id": "filterCategory",
    "era/:id": "filterEra",
    "highest-price": "sortHighestPrice",
    "lowest-price": "sortLowestPrice",
    "most-recent": "sortMostRecent"
  },
  
  filterCategory: function(id) {
    var that = this;
    
    this.items.fetch({
      success: function () {
        that.items.set(that.items.where({category_id: parseInt(id)}));
      }
    })
  },
  
  filterEra: function(id) {
    var that = this;
    
    this.items.fetch({
      success: function () {
        that.items.set(that.items.where({era_id: parseInt(id)}));
      }
    })
  },
  
  indexItems: function() {
    var that = this;
    
    this.items.fetch({
      success: function () {
        var itemsIndexView = new VV.Views.ItemsIndex({
          collection: that.items
        });
    
        that.$rootEl.html(itemsIndexView.render().$el);
      }
    }); 
  },
  
  sortHighestPrice: function () {
    this.items.comparator = function (item) {
      var price = item.get("price");
      return price * -1
    }
    
    this.items.sort();
  },
  
  sortLowestPrice: function () {
    this.items.comparator = function (item) {
      return item.get("price");
    }
    
    this.items.sort();
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
  }
});
