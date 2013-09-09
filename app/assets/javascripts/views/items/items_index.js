VV.Views.ItemsIndex = Backbone.View.extend({
  initialize: function () {
    var that = this;
    
    
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
