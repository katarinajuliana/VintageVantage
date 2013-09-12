VV.Routers.Items = Backbone.Router.extend({
  initialize: function($rootEl, itemsCollection) {
    this.$rootEl = $rootEl;
    this.items = itemsCollection;
  },
   
  routes: {
    "": "indexItems",
    "_=_": "facebookRedirect",
    "category/:id": "filterCategory",
    "era/:id": "filterEra",
    "highest-price": "sortHighestPrice",
    "lowest-price": "sortLowestPrice",
    "most-recent": "sortMostRecent",
    "?/:search": "search"
  },
  
  _swapView: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(newView.paginate(0).$el);
  },
  
  filterCategory: function (id) {
    var that = this;
    
    that.items.fetch({
      success: function () {
        that.items.set(that.items.where({category_id: parseInt(id)}));
        
        var itemsCatView = new VV.Views.ItemsIndex({
          collection: that.items
        });
        
        that._swapView(itemsCatView);
      }
    })
  },
  
  filterEra: function (id) {
    var that = this;

    that.items.fetch({
      success: function () {
        that.items.set(that.items.where({era_id: parseInt(id)}));
        
        var itemsEraView = new VV.Views.ItemsIndex({
          collection: that.items
        });
        
        that._swapView(itemsEraView);
      }
    });
  },
  
  indexItems: function () {
    var that = this;
    
    that.items.fetch({
      success: function () {
        var itemsIndexView = new VV.Views.ItemsIndex({
          collection: that.items
        });
    
        that._swapView(itemsIndexView);
      }
    }); 
  },
  
  search: function (search) {
    var that = this;
    var pattern = new RegExp(".*" + search + ".*", "i");

    that.items.fetch({
      success: function () {     
        that.items.set(that.items.filter(function (item){
          return (pattern.exec(item.get("description")) || pattern.exec(item.get("title")));
          })
        );
        
        var itemsSearchView = new VV.Views.ItemsIndex({
          collection: that.items
        });
        
        that._swapView(itemsSearchView);
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
  },
  
  facebookRedirect: function () {
    Backbone.history.navigate("/", {trigger: true});
  }
});
