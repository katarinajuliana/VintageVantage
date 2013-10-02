$(function () {
  $(".answer").on("click", function (event) {
    event.preventDefault();

    if ($(event.target).siblings(".question-answer-form").length > 0) {
      $(event.target).parent().find("form").remove();
    } else {
      questionId = $(event.target).data("id");   
      form = $("<form class='question-answer-form' role='form' data-id='" + questionId + "'><input type='text' class='form-control question-answer'><button type='submit' class='btn btn-info'>Answer</button></form>")
      $(event.target).parent().append(form);
    }
  });
  
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

    if (window.currentUser) {
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
    } else {
      $('#modal-errors').html("You must be logged in to do that!")
        .removeClass("hidden");
  
      $.modal.close;

      $("#sign-in-tab").addClass("active");
      $("#sign-in-form").removeClass("hidden");

      $("#sign-up-tab").removeClass("active");
      $("#sign-up-form").addClass("hidden");

      $("#auth-modal").modal({fadeDuration: 250}); 
    }
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
  
  $("body").on("submit", ".question-answer-form", function(event) {
    event.preventDefault();
    var form = event.currentTarget;

    $.ajax({
      url: "/questions/" + $(form).data("id"),
      method: "put",
      data: { answer: $(form).find(".question-answer").val() },
      success: function (response) {
        $(form).parent().find(".answered").html("Answer: " + response.answer).removeClass("hidden");
        $(form).remove();
      }
    })
  });
  
  $("#search-form").on("submit", function (event) {
    event.preventDefault();
    
    var search = $("#search-content")[0].value;
    
    window.location = "/#/?/" + search;
  });
});