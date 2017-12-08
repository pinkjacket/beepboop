var countFunction = function(goalNumber) {
userOutputs = [];

for (var i = 0; i <= goalNumber; i++) {
  var currentDigit;
  if (hasNumber(i, 0)) {
    currentDigit = "Beep!"
  } else if (hasNumber(i, 1)) {
    currentDigit = "Boop!";
  } else if (divideByThree(i)) {
    currentDigit = "I'm sorry, Dave. I'm afraid I can't do that"
  } else {
    currentDigit = i;
  }
  userOutputs.push(currentDigit);
  }

}

var hasNumber = function(digit, check) {
  var thisDigit = digit.toString();
  var numberCheck = check.toString();
  for (var j = 0; j < thisDigit.length; j++) {
    if (thisDigit.charAt(j) === numberCheck) {
      return true;
    }
  }
}

var divideByThree = function(number) {
  if (number % 3 === 0) {
    return true;
  }
}




$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
        var goalNumber = parseInt($("input#countuntil").val());
        var finalList = countFunction(goalNumber);
        var userOutput = [];
        $("#results").empty();
        $("#readout").show();
        userOutputs.forEach(function(userOutput) {
        $("#results").append(userOutput + ", ");
      });
  });
});
