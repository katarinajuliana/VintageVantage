VV.Views.ItemsIndex = Backbone.View.extend({
  initialize: function () {
    var that = this;
    
    that.listenTo(that.collection, "add", that.paginateCallback);
    that.listenTo(that.collection, "change", that.paginateCallback);
    that.listenTo(that.collection, "remove", that.paginateCallback);
    that.listenTo(that.collection, "sort", that.paginateCallback);
  },
  
  events: {
    "click .page-link": "pageClickCallback",
    "click .item-fav": "favoriteCallback",
    "click #most-recent": "sortMostRecent",
    "click #lowest-price": "sortLowestPrice",
    "click #highest-price": "sortHighestPrice"
  },
  
  template: JST['items/index'],
  
  render: function (items) {
    var numPages = Math.ceil(this.collection.size()/16);

    var renderedContent = this.template({
      items: items,
      page: this.page,
      numPages: numPages
    });
    
    this.$el.html(renderedContent);
    return this;
  },
  
  favoriteCallback: function (event) {
    event.preventDefault();
    
    if (window.currentUser) {
      var $button = $(event.currentTarget);
      var itemId = $button.data("id");
      var method = ($button.hasClass("fav") ? "POST" : "DELETE")

      $.ajax({
        url: "/items/" + itemId + "/item_favorite.json",
        type: method,
        data: { item_id: itemId },
        success: function (response) {
          $button.toggleClass("hidden");
          $button.next().toggleClass("hidden");
          $button.prev().toggleClass("hidden");
        }
      });
    } else {
      $('#modal-errors').html("You must be logged in to do that!")
        .removeClass("hidden");
        
      $.modal.close;
  
      $("#sign-in-tab").addClass("active");
      $("#sign-in-form").removeClass("hidden");
  
      $("#sign-up-tab").removeClass("active");
      $("#sign-up-form").addClass("hidden");
  
      $("#auth-modal").modal({fadeDuration: 250}); 
    }
  },
  
  paginate: function (page) {
    if (!page) {
      var page = 0
    }
    
    this.page = page;
    
    var firstItem = page * 16;
    var lastItem = firstItem + 16;

    var items = this.collection.slice(firstItem, lastItem);
    return this.render(items)
  },
  
  paginateCallback: function(event) {
    this.paginate(0);
  },
  
  pageClickCallback: function (event) {
    event.preventDefault();
    var pageNumber = $(event.target).data("page");
    this.paginate(pageNumber);
  },
  
  sortHighestPrice: function (event) {
    event.preventDefault();
    
    this.collection.comparator = function (item) {
      var price = item.get("price");
      return price * -1
    }
    
    this.collection.sort();
  },
  
  sortLowestPrice: function (event) {
    event.preventDefault();
    
    this.collection.comparator = function (item) {
      return item.get("price");
    }
    
    this.collection.sort();
  },
  
  sortMostRecent: function (event) {
    this.collection.comparator = function (item1, item2) {
      if (item1.get("updated_at") > item2.get("updated_at")) {
        return -1
      } else {
        return 1
      }
    }
    
    this.collection.sort();
  },
});
