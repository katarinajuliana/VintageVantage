VV.Views.CategoriesIndex = Backbone.View.extend({
  initialize: function (categories) {
    this.collection = categories
    this.$el = $("<ul>");
  },
  
  template: JST['categories/index'],
  
  render: function() {
    var renderedContent = this.template({
      categories: this.collection
    });
    
    this.$el.html(renderedContent);
    return this;
  }
})