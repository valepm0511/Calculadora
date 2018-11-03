let operatorA;
let operatorB;
let operator;

let init = () => {
    // variables
    let output = document.getElementById('output');
    let uno = document.getElementById('uno');
    let dos = document.getElementById('dos');
    let tres = document.getElementById('tres');
    let cuatro = document.getElementById('cuatro');
    let cinco = document.getElementById('cinco');
    let seis = document.getElementById('seis');
    let siete = document.getElementById('siete');
    let ocho = document.getElementById('ocho');
    let nueve = document.getElementById('nueve');
    let cero = document.getElementById('cero');
    let sumar = document.getElementById('suma');
    let restar = document.getElementById('resta');
    let multiplicar = document.getElementById('multiplicacion');
    let dividir = document.getElementById('division');
    let reset = document.getElementById('reset');
    let igual = document.getElementById('igual');

    // eventos de numeros

    uno.onclick = (e) => {
        if (output.textContent == operator) {
            clear();
        }
        output.textContent = output.textContent + '1';
    }
    dos.onclick = (e) => {
        if (output.textContent == operator) {
            clear();
        }
        output.textContent = output.textContent + '2';
    }
    tres.onclick = (e) => {
        if (output.textContent == operator) {
            clear();
        }
        output.textContent = output.textContent + '3';
    }
    cuatro.onclick = (e) => {
        if (output.textContent == operator) {
            clear();
        }
        output.textContent = output.textContent + '4';
    }
    cinco.onclick = (e) => {
        if (output.textContent == operator) {
            clear();
        }
        output.textContent = output.textContent + '5';
    }
    seis.onclick = (e) => {
        if (output.textContent == operator) {
            clear();
        }
        output.textContent = output.textContent + '6';
    }
    siete.onclick = (e) => {
        if (output.textContent == operator) {
            clear();
        }
        output.textContent = output.textContent + '7';
    }
    ocho.onclick = (e) => {
        if (output.textContent == operator) {
            clear();
        }
        output.textContent = output.textContent + '8';
    }
    nueve.onclick = (e) => {
        if (output.textContent == operator) {
            clear();
        }
        output.textContent = output.textContent + '9';
    }
    cero.onclick = (e) => {
        if (output.textContent == operator) {
            clear();
        }
        output.textContent = output.textContent + '0';
    }

    // eventos de operadores

    reset.onclick = (e) => {
        toReset();
    }

    sumar.onclick = (e) => {
        operatorA = output.textContent;
        operator = '+';
        clear();
        output.textContent = '+';

    }

    restar.onclick = (e) => {
        operatorA = output.textContent;
        operator = '-';
        clear();
        output.textContent = '-';
    }

    dividir.onclick = (e) => {
        operatorA = output.textContent;
        operator = '/';
        clear();
        output.textContent = '/';
    }

    multiplicar.onclick = (e) => {
        operatorA = output.textContent;
        operator = '*';
        clear();
        output.textContent = '*';
    }

    igual.onclick = (e) => {
        operatorB = output.textContent;
        result();
    }

}

let clear = () => {
    output.textContent = "";
}


let toReset = () => {
    output.textContent = "";
    operatorA = 0;
    operatorB = 0;
    operator = "";
}

let result = () => {
    let res = 0;
    switch (operator) {
        case '+':
            res = parseFloat(operatorA) + parseFloat(operatorB);
            break;
        case '-':
            res = parseFloat(operatorA) - parseFloat(operatorB);
            break;
        case '/':
            res = parseFloat(operatorA) / parseFloat(operatorB);
            break;
        case '*':
            res = parseFloat(operatorA) * parseFloat(operatorB);
            break;
    }
    toReset();
    output.textContent = res;
}