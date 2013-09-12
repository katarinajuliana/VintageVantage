$(function () {
  $("#search-form").on("submit", function (event) {
    event.preventDefault();
    
    var search = $("#search-content")[0].value;
    
    window.location = "/#/?/" + search;
  });
});