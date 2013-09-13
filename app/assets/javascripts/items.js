$(function () {
  $("#search-form").on("submit", function(event){
    event.preventDefault;
    
    var search = $("#search-content").value();
    
    window.navigate("/#/?:" + search);
  });
});