var countFunction = function(goalNumber) {
userOutputs = [];

for (var i = 0; i <= goalNumber; i++) {
  userOutputs.push(i);
  }
}







$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
        var goalNumber = parseInt($("input#countuntil").val());
        var finalList = countFunction(goalNumber);
        var userOutput = [];
        $("#readout").show();
        userOutputs.forEach(function(userOutput) {
        $("#results").append(userOutput + ", ");
      });
  });
});
