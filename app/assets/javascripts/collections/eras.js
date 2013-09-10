VV.Collections.Eras = Backbone.Collection.extend({
  model: VV.Models.Era,
  
  comparator: function (era1, era2) {
    if (era1.get("decade") > era2.get("decade")) {
      return -1;
    } else {
      return 1;
    }
  }
});