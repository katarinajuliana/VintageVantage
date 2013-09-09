VV.Models.Item = Backbone.Model.extend({
  urlRoot: '/items',
  
  toJSON: function () {
    return _.omit(this.attributes, "listPhoto", "shopName", "shopUrl");
  }
});
