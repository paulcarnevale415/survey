$(document).ready(function() {
  $("#blanks form").submit(function(event) {

      var userInputName = $("input#name").val();
      $(".name").text(userInputName).val();
      var userInputFood = $("select#food").val();
      $(".food").text(userInputFood).val();
      var userInputMusic = $("input:radio[name=music]:checked").val();
      $(".music").text(userInputMusic).val();

    $("#confirmation").show();

    event.preventDefault();
  });
});
