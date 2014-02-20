currNumber = 1;
var factorial = function(number) {
  if (number < 0 || number % 1 !==0) {
    return "invalid input.";
  }
  
  currNumber *= number;

  if (number > 1) {
    factorial(number - 1);
  }
  
  return currNumber;
};

//var otherFactorial = function(number) {
// if (number < 0 || number % 1 !==0) {
//    return "invalid input.";
//  }

$(document).ready(function() {
  $("#getNumber").submit(function() {
    var number = $("#numberInput").val();
    var factNum = factorial(number);

    $(".result").text(number + "! = " + factNum);
    event.preventDefault();
    currNumber = 1;
  });
});
