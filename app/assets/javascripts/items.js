$(function () {
  $(".cart-link").droppable({
    accept: ".listing-card",
    drop: function (event, ui) {
      $(this).css("color", "#777777");
      $(".cart-count").removeClass("label-success").addClass("label-default");

      var itemId = $(ui.draggable).data("id");
      
      $.ajax({
        url: "/cart_item.json",
        method: "post",
        data: { item_id: itemId },
        success: function (response) {
          var num = parseInt($(".cart-count").html()) + 1;
          $(".cart-count").html(num);
        }
      });
    },
    out: function (event, ui) {
      $(this).css("color", "#d9534f");
      $(".cart-count").removeClass("label-success").addClass("label-danger");
    },
    over: function (event, ui) {
      $(this).css("color", "#5cb85c");
      $(".cart-count").removeClass("label-danger").addClass("label-success");
    },
    tolerance: "touch"
  });
  
  $("#item-question-form").on("submit", function (event) {
    event.preventDefault();

    $.ajax({
      url: "/items/" + $(event.target).data("id") + "/questions",
      method: "post",
      data: { body: $("#question_body")[0].value },
      success: function (response) {
        $("#item-questions").append("<li><small><text class='lead'>" + 
          response.body + "</small><br>From: <a href='/users/" + 
            window.currentUser.id + "'>" + window.currentUser.username + "</text></li>");
        $("#question_body").val('');
      }
    })
  });
  
  $(".listing-card").draggable({
    cursorAt: {left: 40, top: 30},
    helper: "clone",
    opacity: 0.7,
    revert: true,
    revertDuration: 100,
    
    start: function (event, ui) {
      $(ui.helper).addClass("listing-drag");
      $($(ui.helper).find(".caption")).remove();
      $(".cart-link").html("Add To Cart").css("color", "#d9534f");
      $(".cart-count").removeClass("label-default").addClass("label-danger");
    },
    stop: function (event, ui) {
      $(".cart-link").html("Your Cart").css("color", "#777777");
      $(".cart-count").removeClass("label-danger").addClass("label-default");
    },
    zIndex: 100
  });
  
  $("#search-form").on("submit", function (event) {
    event.preventDefault();
    
    var search = $("#search-content")[0].value;
    
    window.location = "/#/?/" + search;
  });
});