const calculatorValues = document.querySelectorAll("[value]");
const screen = document.getElementById("screen");



calculatorValues.forEach(value => {
    console.log(value.addEventListener("click", (event) => {
        switch (event.target.value) {
            case event.target.value === "=":
                eval(screenCalcul)
                break;
                case event.target.value === "C":
                    jj.remove()
                    break;
                default:
                    screen.textContent += event.target.value    
                    break;
        }
    } ));
});


