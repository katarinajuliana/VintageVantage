VV.Models.Item = Backbone.Model.extend({
  toJSON: function () {
    return _.omit(this.attributes, "listPhoto", "shopName", "shopUrl");
  }
});
