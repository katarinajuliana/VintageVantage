VV.Views.ItemsIndex = Backbone.View.extend({
  initialize: function () {
    var that = this;
    var renderCallback = that.render.bind(that);
    
    that.listenTo(that.collection, "add", renderCallback);
    that.listenTo(that.collection, "change", renderCallback);
    that.listenTo(that.collection, "remove", renderCallback);
    that.listenTo(that.collection, "reset sort", renderCallback);
  },
  
  events: {
    "click .page-link": "paginateCallback"
  },
  
  template: JST['items/index'],
  
  render: function (items) {
    var numPages = Math.ceil(this.collection.size()/20);
    
    var renderedContent = this.template({
      items: items,
      page: this.page,
      numPages: numPages
    });
    
    this.$el.html(renderedContent);
    return this;
  },
  
  paginate: function (page) {
    this.page = page;
    
    var firstItem = page * 20;
    var lastItem = firstItem + 20;

    var items = this.collection.slice(firstItem, lastItem);
    return this.render(items)
  },
  
  paginateCallback: function(event) {
    event.preventDefault();
    
    var pageNumber = $(event.target).data("page");
    
    this.paginate(pageNumber);
  }
});
