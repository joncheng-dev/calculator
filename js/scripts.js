// Business logic:
function add(n1, n2) {
  return n1 + n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

// User interface logic:
$(document).ready(function () {
  // Addition
  $("form#add").submit(function (event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    // Prints out the result
    $("#additionOutput").text(result);
  });
  // Subtraction
  $("form#sub").submit(function (event) {
    event.preventDefault();
    const number1 = parseInt($("#sub1").val());
    const number2 = parseInt($("#sub2").val());
    const result = subtract(number1, number2);
    // Prints out the result
    $("#subtractionOutput").text(result);
  });
  // Multiplication
  $("form#mult").submit(function (event) {
    event.preventDefault();
    const number1 = parseInt($("#mult1").val());
    const number2 = parseInt($("#mult2").val());
    const result = multiply(number1, number2);
    // Prints out the result
    $("#multiplicationOutput").text(result);
  });
  // Division
  $("form#div").submit(function (event) {
    event.preventDefault();
    const number1 = parseInt($("#div1").val());
    const number2 = parseInt($("#div2").val());
    const result = divide(number1, number2);
    // Prints out the result
    $("#divisionOutput").text(result);
  });
});
