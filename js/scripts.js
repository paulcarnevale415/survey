$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["name", "food"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput).val();
      var userInput = $("select#" + blank).val();
      $("." + blank).text(userInput).val();
    });

    $("#confirmation").show();

    event.preventDefault();
  });
});
