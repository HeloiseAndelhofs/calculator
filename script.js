const calculatorValues = document.querySelectorAll("[value]");
const screen = document.getElementById("screen");

function calculator(event) {
    let valueTarget = event.target.value
   screen.innerHTML += `${valueTarget}`
}

calculatorValues.addEventListener("click", calculator)
console.log(calculatorValues);