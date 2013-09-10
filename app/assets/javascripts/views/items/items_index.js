VV.Views.ItemsIndex = Backbone.View.extend({
  initialize: function () {
    var that = this;
    
    that.listenTo(that.collection, "add", that.paginateCallback);
    that.listenTo(that.collection, "change", that.paginateCallback);
    that.listenTo(that.collection, "remove", that.paginateCallback);
    that.listenTo(that.collection, "reset sort", that.paginateCallback);
  },
  
  events: {
    "click .page-link": "pageClickCallback",
    "click .item-fav": "favoriteCallback"
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
      $('#auth-modal').modal('show');
    }
  }
});
