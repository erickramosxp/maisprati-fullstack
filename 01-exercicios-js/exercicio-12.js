/* 
    12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
    Ex.: 1, 1, 2, 3, 5, 8, 13, 21. 
*/

function fibonacci(numero) {
    if (numero == 1)
        return (1);
    if (numero == 0)
        return (0);
    return (fibonacci(numero - 1) + fibonacci(numero - 2));
}

for (let i = 1; i <= 10; i++) {
    console.log(fibonacci(i));
}