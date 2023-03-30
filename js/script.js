var inputLabel = document.getElementById("inputLabel");

function insert(num) {
  inputLabel.value += num;
}
function clearScreen() {
  inputLabel.value = "";
}

function deleteChar() {
  inputLabel.value = inputLabel.value.slice(0, -1);
}

function calculate() {
  try {
    inputLabel.value = eval(inputLabel.value);
  } catch (error) {
    inputLabel.value = "Error";
  }
}
