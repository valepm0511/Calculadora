let calculator = document.getElementById('calculator');
let output = document.getElementById('calculator-output');

calculator.addEventListener('click', calculatorClick);

function calculatorClick(event) {
    let target = event.target;
    let dataset = target.dataset;
    let value = dataset.value;
    let type = dataset.type;
    // console.log(dataset);
    if (type) {
        console.log(dataset);
        if (type === "number") {
            output.innerHTML = value;
        }
    }
}