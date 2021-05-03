function fibonacci(num) {
    if (num < 2)
        return num;
    return fibonacci(num-1) + fibonacci(num-2)
}

const prompt = require("prompt-sync")(); // prompt es como el input en python, tuve que instalarlo. En el terminal puse: "npm install prompt-sync"
const fib_num = prompt("Ingrese el número de la sucesión que desea saber: "); // Fué la unica manera que encontré para interactuar en la consola.
console.log(fibonacci(Number(fib_num))); //Number() para pasar de texto a número 

//Si esta malo usar el prompt como un input para que pregunte al usuario, simplemente se puede reemplazar Number(fib_num) (linea 9)
//por el número que uno desee, la diferencia es que el programa no pregunta por el número que quiere el usuario

