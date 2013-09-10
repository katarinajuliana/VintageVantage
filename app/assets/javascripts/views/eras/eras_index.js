VV.Views.ErasIndex = Backbone.View.extend({
  initialize: function (eras) {
    this.collection = eras;
    this.$el = $("<ul>");
  },
  
  template: JST['eras/index'],
  
  render: function() {
    var renderedContent = this.template({
      eras: this.collection
    });
    
    this.$el.html(renderedContent);
    return this;
  }
})