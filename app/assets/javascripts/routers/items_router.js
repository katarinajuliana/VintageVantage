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
    "?/:search": "search"
  },
  
  _swapView: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(newView.paginate(0).$el);
    
    $(".cart-link").droppable({
      accept: ".listing-card",
      drop: function (event, ui) {
        $(this).css("color", "#777777");
        $(".cart-count").removeClass("label-success").addClass("label-default");

        var itemId = $(ui.draggable).data("id");
      
        $.ajax({
          url: "/cart_item.json",
          method: "post",
          data: { item_id: itemId },
          success: function (response) {
            var num = parseInt($(".cart-count").html()) + 1;
            $(".cart-count").html(num);
          }
        });
      },
      out: function (event, ui) {
        $(this).css("color", "#d9534f");
        $(".cart-count").removeClass("label-success").addClass("label-danger");
      },
      over: function (event, ui) {
        $(this).css("color", "#5cb85c");
        $(".cart-count").removeClass("label-danger").addClass("label-success");
      },
      tolerance: "touch"
    });
    
    $(".listing-card").draggable({
      cursorAt: {left: 40, top: 30},
      helper: "clone",
      opacity: 0.7,
      revert: true,
      revertDuration: 100,
    
      start: function (event, ui) {
        $(ui.helper).addClass("listing-drag");
        $($(ui.helper).find(".caption")).remove();
        $(".cart-link").html("Add To Cart").css("color", "#d9534f");
        $(".cart-count").removeClass("label-default").addClass("label-danger");
      },
      stop: function (event, ui) {
        $(".cart-link").html("Your Cart").css("color", "#777777");
        $(".cart-count").removeClass("label-danger").addClass("label-default");
      },
      zIndex: 100
    });
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
  
  facebookRedirect: function () {
    Backbone.history.navigate("/", { trigger: true });
  }
});
