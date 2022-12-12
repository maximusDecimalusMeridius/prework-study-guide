// Define global variables to hold the operands and operator
let operand1;
let operand2;
let operator;

// Define the event handler functions
function handleOperandClick(event) {
  // Get the value of the clicked operand button
  let value = event.target.value;

  // If no operator has been chosen, set the value as the first operand
  if (!operator) {
    operand1 = value;
    updateDisplay(operand1);
  }
  // Otherwise, set the value as the second operand
  else {
    operand2 = value;
    updateDisplay(operand2);
  }
}

function handleOperatorClick(event) {
  // Get the value of the clicked operator button
  operator = event.target.value;
}

function handleEqualsClick() {
  // Convert the operands to numbers
  operand1 = Number(operand1);
  operand2 = Number(operand2);

  // Perform the operation and store the result
  let result;
  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    case '/':
      result = operand1 / operand2;
      break;
  }

  // Update the display with the result
  updateDisplay(result);
}

function updateDisplay(value) {
  // Update the text content of the display element
  let display = document.getElementById('display');
  display.textContent = value;
}

// Add event listeners to the operand and operator buttons
let operandButtons = document.querySelectorAll('button.operand');
operandButtons.forEach(button => button.addEventListener('click', handleOperandClick));

let operatorButtons = document.querySelectorAll('button.operator');
operatorButtons.forEach(button => button.addEventListener('click', handleOperatorClick));

// Add an event listener to the equals button
let equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', handleEqualsClick);