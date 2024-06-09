/* 
    13. Crie um programa que preencha automaticamente (usando lógica, não apenas
    atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
    da sequência de Fibonacci. 
    */

function fibonacci(numero) {
    if (numero == 1)
        return (1);
    if (numero == 0)
        return (0);
    return (fibonacci(numero - 1) + fibonacci(numero - 2));
}

let array = [];

for (let i = 1; i <= 15; i++) {
    array.push(fibonacci(i));
}

console.log(array);