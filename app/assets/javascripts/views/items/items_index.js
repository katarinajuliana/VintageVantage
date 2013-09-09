VV.Views.ItemsIndex = Backbone.View.extend({
  initialize: function () {
    var that = this;
    var renderCallback = that.render.bind(that);
    
    that.listenTo(that.collection, "reset sort", renderCallback);
  },
  
  template: JST['items/index'],
  
  render: function() {
      var renderedContent = this.template({
      items: this.collection
    });
    
    this.$el.html(renderedContent);
    return this;
  }
});
