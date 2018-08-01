let button = document.querySelector("#button") // # == id

let numberOne = document.querySelector("#numberOne").innerText
let numberTwo = document.querySelector("#numberTwo").innerText
let result = document.querySelector("#result")

button.addEventListener("click", function() {
  let numberResult = Number(result.innerText);
  result.innerText = numberResult + sum(numberOne, numberTwo);
});

const sum = function(a, b) {
  return Number(a) + Number(b);
};
