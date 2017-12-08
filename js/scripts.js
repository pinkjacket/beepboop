var userOutput = []







$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
        var goalNumber = parseInt($("input#countuntil").val());
        $("#readout").show();
        $("#results").text(userOutput);
  });
});
