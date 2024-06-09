/* 
    15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
    final, mostre quais são os números pares que foram digitados e em que posições eles
    estão armazenados. 
*/

const prompt = require('prompt-sync')();

let numeros = [];

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Insira o " + (i + 1) +"° numero."));
    numeros.push(numero);
}

for (let numero in numeros) {
    if (numeros[numero] % 2 == 0) {
        console.log("O número par " + numeros[numero] + " foi encontrado na posição " + numero);
    }
}