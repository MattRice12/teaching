let numberOne = document.querySelector("#numberOne").innerText
let numberTwo = document.querySelector("#numberTwo").innerText

let result = document.querySelector("#result")

result.innerText = Number(numberOne) + Number(numberTwo)

/* --------------------------- */

let inputName = document.querySelector('#inputName')
let displayName = document.querySelector('#displayName')

// Event Listeners

let submitName = document.querySelector('#submitName')

inputName.addEventListener('keyup', function() {
  let output = document.querySelector('#inputName').value

  displayName.innerText = output;
})
