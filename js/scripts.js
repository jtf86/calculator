var add = function(number1, number2) {
  return number1 + number2;
};

var multiply = function(number3, number4) {
  return number3 * number4;
};

var subtract = function(number5, number6) {
  return number5 - number6;
};

var divide = function(number7, number8) {
  return number7/number8;
};

$(document).ready(function(){
  $("#add").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());
    var result= add(number1, number2);
    $("#output").text(result);
  });

  $("#subtract").click(function() {
    event.preventDefault();
    var number3 = parseInt($("#num1").val());
    var number4 = parseInt($("#num2").val());
    var result= subtract(number3, number4);
    $("#output").text(result);
  });

  $("#multiply").click(function() {
    event.preventDefault();
    var number5 = parseInt($("#num1").val());
    var number6 = parseInt($("#num2").val());
    var result= multiply(number5, number6);
    $("#output").text(result);
  });

  $("#divide").click(function() {
    event.preventDefault();
    var number7 = parseInt($("#num1").val());
    var number8 = parseInt($("#num2").val());
    var result= divide(number7, number8);
    $("#output").text(result);
  });

});
