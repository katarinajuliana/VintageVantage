VV.Views.ItemsIndex = Backbone.View.extend({
  initialize: function () {
    var that = this;
    
    that.listenTo(that.collection, "add", that.paginateCallback);
    that.listenTo(that.collection, "change", that.paginateCallback);
    that.listenTo(that.collection, "remove", that.paginateCallback);
    that.listenTo(that.collection, "reset sort", that.paginateCallback);
  },
  
  events: {
    "click .page-link": "pageClickCallback"
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
  }
});
