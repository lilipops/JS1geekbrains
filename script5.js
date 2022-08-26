const io = require('console-read-write');
// ZADANIE 5


function sum(a, b) {
    return a + b
}

function substraction(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return b == 0 ? "ne veren" : a / b;
}

// ZADANIE 6

function mathOperation(a, b, operation) {
    switch (operation) {
        case 'sum': return sum(a,b)
        case 'substraction': return substraction(a,b)
        case 'multiply': return multiply(a,b)
        case 'divide': return divide(a,b)
        default: return console.log("there is no such operation")
     
    }
}
// ETU CHAST IA ZDELAL DLIA PROVERKI
async function main() {
    let a = parseInt(await io.read())
    let b = parseInt(await io.read())
    let operation = await io.read()
    console.log(mathOperation(a,b, operation))
}

main();