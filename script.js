const calculatorValues = document.querySelectorAll("[value]");
const screen = document.getElementById("screen");



calculatorValues.forEach(value => {
        (value.addEventListener("click", (event) => {
        switch (event.target.value) {
            case "=":
                screen.textContent = eval(screen.textContent)
                break;
                case "C":
                    screen.textContent = "";
                    break;
                default:
                    screen.textContent += event.target.value    
                    break;
        }
    } ));
});

