VV.Collections.Categories = Backbone.Collection.extend({
  model: VV.Models.Category,
  
  comparator: function (category) {
    return category.get("title");
  }
});