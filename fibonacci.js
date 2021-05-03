function fibonacci(num) {
    if (num < 2)
        return num;
    return fibonacci(num-1) + fibonacci(num-2)
}

const prompt = require("prompt-sync")(); // prompt es como el input en python, tuve que instalarlo. En el terminal puse: "npm install prompt-sync"
const fib_num = prompt("Ingrese el número de la sucesión que desea saber: "); // Fué la unica manera que encontré para interactuar en la consola.
console.log(fibonacci(Number(fib_num))); //Number() para pasar de texto a número

