var number1;
var number2;

var add = function(number1, number2) {
  return number1 + number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var divide = function(number1, number2) {
  return number1/number2;
};

$(document).ready(function(){

    $("button").click(function(event) {
        number1 = parseInt($("#num1").val());
        number2 = parseInt($("#num2").val());
        event.preventDefault();
    })

  $("#add").click(function() {
    var result= add(number1, number2);
    $("#output").text(result);
  });

  $("#subtract").click(function() {
    var result= subtract(number1, number2);
    $("#output").text(result);
  });

  $("#multiply").click(function() {
    var result= multiply(number1, number2);
    $("#output").text(result);
  });

  $("#divide").click(function() {
    var result= divide(number1, number2);
    $("#output").text(result);
  });

});
