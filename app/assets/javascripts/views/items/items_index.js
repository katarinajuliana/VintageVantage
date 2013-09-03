VV.Views.ItemsIndex = Backbone.View.extend({
  template: JST['items/index'],
  
  render: function() {
    var renderedContent = this.template({
      items: this.collection
    });
    
    this.$el.html(renderedContent);
    return this;
  }
});
